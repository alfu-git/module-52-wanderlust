export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const data = await res.json();
  return data;
};

export const getDestinationById = async (id) => {
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const data = await res.json();
  return data;
};

export const getAllBookingsByUserId = async (userId) => {
  const res = await fetch(`http://localhost:5000/booking/${userId}`);
  const data = await res.json();
  return data;
};
