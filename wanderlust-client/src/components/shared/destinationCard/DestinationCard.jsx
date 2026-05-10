import { Button } from "@heroui/react";
import { ArrowUpRight, CalendarDays, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, country, destinationName, price, duration } =
    destination;

  return (
    <div className="group">
      <figure>
        <Image
          src={imageUrl}
          alt={destinationName}
          width={400}
          height={230}
          className="w-full h-57.5 object-cover transition-transform group-hover:scale-102 duration-600"
        />
      </figure>

      <div className="mt-4">
        <span className="flex gap-2 items-center text-[#6C696D]">
          <MapPinned size={18} /> <span>{country}</span>
        </span>

        <div className="my-2 flex justify-between items-center">
          <h3 className="text-2xl font-medium font-lora">{destinationName}</h3>

          <span className="flex items-baseline">
            <span className="text-2xl font-medium font-lora">${price}</span>

            <span className="text-[#6C696D]">/Person</span>
          </span>
        </div>

        <p className="mb-4 text-[#6C696D] flex gap-2 items-center">
          <CalendarDays size={18} />
          <span>{duration}</span>
        </p>

        <Link href={"/"}>
          <Button
            className={
              "p-0 h-full bg-transparent text-[#15A1BF] border-b border-[#15A1BF] rounded-none"
            }
          >
            Book Now <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
