import { headers } from "next/headers";
import { auth } from "./auth";

export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const data = await res.json();
  return data;
};

export const getDestinationById = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getAllBookingsByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/booking/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
