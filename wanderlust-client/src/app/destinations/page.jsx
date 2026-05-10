import DestinationCard from "@/components/shared/destinationCard/DestinationCard";
import { getAllDestinations } from "@/lib/data";
import { Separator } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Wanderlust | All Destinations",
  description: "User can explore all destinations",
};

const DestinationsPage = async () => {
  const destinations = await getAllDestinations();

  return (
    <section className="my-10 lg:my-20 max-w-7xl mx-auto px-5">
      <div>
        <div className="mb-10">
          <h2 className="mb-4 text-4xl sm:text-[60px] font-lora leading-relaxed">
            Explore All Destinations
          </h2>

          <p className="text-[20px] text-[#6C696D]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        <div className="mb-10">
          <div className="mb-4 border border-[#B6B6B6] text-[#B6B6B6] flex justify-between items-center">
            <div className="p-2 sm:p-4 w-full flex justify-between items-center">
              <span>CATEGORY</span>
              <ChevronDown />
            </div>

            <Separator orientation="vertical" variant="secondary" />

            <div className="p-2 sm:p-4 w-full flex justify-between items-center">
              <span>PRICE RANGE</span>
              <ChevronDown />
            </div>

            <Separator orientation="vertical" variant="secondary" />

            <div className="p-2 sm:p-4 w-full flex justify-between items-center">
              <span>SORT BY</span>
              <ChevronDown />
            </div>
          </div>

          <p className="text-[20px] text-[#6C696D]">Showing 4 Destinations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
