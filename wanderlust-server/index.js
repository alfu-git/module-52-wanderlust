const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello from server");
});

async function run() {
  try {
    await client.connect();

    const db = client.db("module_50_wanderlust-db");
    const destinationsCollection = db.collection("destinations");

    app.get("/destinations", async (req, res) => {
      const cursor = destinationsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/destinations/:id", async (req, res) => {
      const { id } = await req.params;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await destinationsCollection.findOne(query);
      res.send(result);
    });

    app.patch("/destinations/:id", async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;

      const result = await destinationsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData },
      );

      res.send(result);
    });

    app.post("/destinations", async (req, res) => {
      const destinationDoc = req.body;
      const result = await destinationsCollection.insertOne(destinationDoc);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running successfully on ${port}`);
});
