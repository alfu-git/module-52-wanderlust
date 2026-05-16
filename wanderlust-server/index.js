const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
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

const JWKS = createRemoteJWKSet(new URL("http://localhost:3000/api/auth/jwks"));

const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

app.get("/", (req, res) => {
  res.send("Hello from server");
});

async function run() {
  try {
    await client.connect();

    const db = client.db("module_50_wanderlust-db");
    const destinationsCollection = db.collection("destinations");
    const bookingsCollection = db.collection("bookings");

    app.get("/destinations", verifyToken, async (req, res) => {
      const cursor = destinationsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/destinations/:id", verifyToken, async (req, res) => {
      const { id } = req.params;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await destinationsCollection.findOne(query);
      res.send(result);
    });

    app.post("/destinations", async (req, res) => {
      const destinationDoc = req.body;
      const result = await destinationsCollection.insertOne(destinationDoc);
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

    app.delete("/destinations/:id", async (req, res) => {
      const { id } = req.params;
      const query = {
        _id: new ObjectId(id),
      };

      const result = await destinationsCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/booking", async (req, res) => {
      const bookingDoc = req.body;
      const result = await bookingsCollection.insertOne(bookingDoc);
      res.send(result);
    });

    app.get("/booking/:userId", async (req, res) => {
      const { userId } = req.params;
      const result = await bookingsCollection.find({ userId }).toArray();
      res.send(result);
    });

    app.delete("/booking/:bookingId", async (req, res) => {
      const { bookingId } = req.params;
      const query = {
        _id: new ObjectId(bookingId),
      };
      const result = await bookingsCollection.deleteOne(query);
      res.json(result);
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
