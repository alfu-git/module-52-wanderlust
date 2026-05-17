"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label, Separator } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DestinationBookingCard = ({ destination }) => {
  const [departureDate, setDepartureDate] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { _id, destinationName, imageUrl, price } = destination;

  const handleBooking = async () => {
    if (!departureDate) {
      toast.warning("Please select a departure date");
      return;
    }

    const bookingData = {
      userName: user?.name,
      userId: user?.id,
      userImage: user?.image,
      destinationId: _id,
      destinationName,
      destinationImage: imageUrl,
      price,
      departureDate: new Date(departureDate),
    };

    const { data: tokenData } = await authClient.token();

    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    setLoading(false);

    const data = await res.json();

    if (data.acknowledged) {
      toast("Thanks for booking. Enjoy your trip.");
      router.push("/my-bookings");
    }
  };

  return (
    <div className="p-5 max-w-100 xl:w-100 border border-[#EEEEEE]/93 shadow shadow-[#000000]/12">
      <div className="mb-12 flex flex-col gap-1">
        <span className="text-[#6C696D]">Starting from</span>

        <span className="text-[40px] text-[#15A1BF] font-semibold">
          ${price}
        </span>

        <span className="text-[#6C696D]">per person</span>
      </div>

      <DateField name="date" onChange={setDepartureDate}>
        <Label className="text-lg">Departure Date</Label>

        <DateField.Group
          className={
            "mb-5 py-3 px-4 w-full bg-[#F8FAFC] border border-[#EEEEEE]/93 rounded-none"
          }
        >
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Separator />

      <Button
        onClick={handleBooking}
        isDisabled={loading}
        className={"mt-5 w-full h-14 bg-[#15A1BF] rounded-none font-medium"}
      >
        {loading ? "Booking..." : "Book Now"}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default DestinationBookingCard;
