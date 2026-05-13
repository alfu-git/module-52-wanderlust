import BookingCard from "@/components/myBookingsPage/bookingCard/BookingCard";
import { auth } from "@/lib/auth";
import { getAllBookingsByUserId } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const allBookings = await getAllBookingsByUserId(user?.id);

  return (
    <section className="my-10 lg:my-20 max-w-7xl mx-auto px-5">
      <div>
        <div className="mb-10">
          <h2 className="mb-4 text-4xl sm:text-[60px] font-lora leading-relaxed">
            My Bookings
          </h2>

          <p className="text-[20px] text-[#6C696D]">
            Manage and view your upcoming travel plans
          </p>
        </div>

        <div className="space-y-6">
          {allBookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingsPage;
