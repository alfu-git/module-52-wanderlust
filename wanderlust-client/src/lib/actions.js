import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addDestinationAction = async (formData) => {
  "use server";

  const destinationData = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:5000/destinations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destinationData),
  });

  const data = await res.json();

  if (data.insertedId) {
    revalidatePath("/destinations");
    redirect("/destinations");
  }

  return data;
};

export const destinationEditAction = async (id, formData) => {
  "use server";

  const destinationUpdateData = Object.fromEntries(formData.entries());
  destinationUpdateData.price = Number(destinationUpdateData.price);

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destinationUpdateData),
  });

  const data = await res.json();

  if (data.modifiedCount > 0) {
    revalidatePath(`/destinations/${id}`);
  }

  return data;
};

export const destinationDeleteAction = async (id) => {
  "use server";

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (data.deletedCount > 0) {
    revalidatePath("/destinations");
    redirect("/destinations");
  }

  return data;
};
