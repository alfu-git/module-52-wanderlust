import DestinationEditForm from "@/components/destinationDetailsPage/destinationEditForm/DestinationEditForm";
import { getDestinationById } from "@/lib/data";
import { Button, Separator } from "@heroui/react";
import { CalendarDays, ArrowRight, MapPinned, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const destination = await getDestinationById(id);

  const {
    imageUrl,
    country,
    destinationName,
    price,
    departureDate,
    description,
    duration,
  } = destination;

  return (
    <section className="mt-10 mb-20 max-w-7xl mx-auto px-5">
      <div>
        <div className="mb-6 flex flex-col gap-y-3 sm:flex-row justify-between sm:items-center">
          <Link href={"/destinations"}>
            <Button className="p-0 h-full bg-transparent text-[#6C696D] text-xl">
              <MoveLeft />
              <span>Back to Destinations</span>
            </Button>
          </Link>

          <DestinationEditForm destination={destination} />
        </div>

        <div>
          <figure className="mb-10">
            <Image
              src={imageUrl}
              alt={destinationName}
              width={1280}
              height={500}
              className="w-full max-h-125 object-cover"
            />
          </figure>

          <Separator />

          <div className="mt-10 flex flex-col xl:flex-row xl:items-center gap-10">
            <div>
              <span className="flex gap-2 items-center text-[#6C696D]">
                <MapPinned size={18} /> <span>{country}</span>
              </span>

              <h3 className="my-4 text-[60px] font-lora">{destinationName}</h3>

              <p className="mb-10 text-[#6C696D] flex gap-2 items-center">
                <CalendarDays size={18} />
                <span className="text-[#0C0B0B]">{duration}</span>
              </p>

              <h4 className="mb-5 text-[32px] font-medium">Overview</h4>

              <p className="text-lg text-[#6C696D]">{description}</p>
            </div>

            <div className="p-5 max-w-100 xl:w-100 border border-[#EEEEEE]/93 shadow shadow-[#000000]/12">
              <div className="mb-12 flex flex-col gap-1">
                <span className="text-[#6C696D]">Starting from</span>

                <span className="text-[40px] text-[#15A1BF] font-semibold">
                  ${price}
                </span>

                <span className="text-[#6C696D]">per person</span>
              </div>

              <div className="mb-5 py-3 px-4 w-full bg-[#F8FAFC] border border-[#EEEEEE]/93 text-lg">
                {departureDate}
              </div>

              <Separator />

              <Button
                className={
                  "mt-5 w-full h-14 bg-[#15A1BF] rounded-none font-medium"
                }
              >
                Book Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetailsPage;
