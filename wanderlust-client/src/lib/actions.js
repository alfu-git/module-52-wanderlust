import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";

export const addDestinationAction = async (formData) => {
  "use server";

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const destinationData = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:5000/destinations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const destinationUpdateData = Object.fromEntries(formData.entries());
  destinationUpdateData.price = Number(destinationUpdateData.price);

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (data.deletedCount > 0) {
    revalidatePath("/destinations");
    redirect("/destinations");
  }

  return data;
};

export const bookingDeleteAction = async (bookingId) => {
  "use server";

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (data.deletedCount > 0) {
    revalidatePath("/my-bookings");
  }

  return data;
};
