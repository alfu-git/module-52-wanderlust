import { Button } from "@heroui/react";
import { CalendarDays, CircleCheck, Eye, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookingDeleteDialog from "../bookingDeleteDialog/BookingDeleteDialog";
import { bookingDeleteAction } from "@/lib/actions";

const BookingCard = ({ booking }) => {
  const { _id, destinationName, destinationImage, departureDate, price } =
    booking;

  return (
    <div className="p-6 border border-[#EEEEEE] shadow shadow-[#000000]/12">
      <div className="flex flex-col lg:flex-row gap-y-10 justify-between">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <figure className="relative w-full lg:w-100 h-50 md:h-80 lg:h-70">
            <Image
              src={destinationImage}
              alt={destinationName}
              fill
              className="object-cover"
            />
          </figure>

          <div>
            <p className="max-w-fit mb-2 px-4 py-1 bg-[#E8F9EE] text-[#1E9E35] rounded-full font-medium flex gap-1.5 items-center">
              <CircleCheck size={20} />
              <span>Confirmed</span>
            </p>

            <h3 className="mb-4.5 text-[40px] font-semibold font-lora">
              {destinationName}
            </h3>

            <p className="mb-3 text-[#6C696D] font-medium flex gap-2 items-center">
              <CalendarDays size={20} />
              <span>
                Departure:{" "}
                {new Date(departureDate).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>

            <p className="mb-4.5 text-[#6C696D] font-medium flex gap-2 items-center">
              <MapPin />
              <span>Booking ID: {_id}</span>
            </p>

            <span className="text-[40px] text-[#15A1BF] font-semibold">
              ${price}
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-end">
          <BookingDeleteDialog
            booking={booking}
            bookingDeleteAction={bookingDeleteAction}
          />

          <Button
            className={
              "px-6 h-12 bg-[#15A1BF] rounded-none text-[#EEEEEE] font-medium"
            }
          >
            <Eye size={20} />
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
