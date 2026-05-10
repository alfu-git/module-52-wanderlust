import AddDestinationForm from "@/components/addDestinationPage/addDestinationForm/AddDestinationForm";
import { addDestinationAction } from "@/lib/actions";
import React from "react";

export const metadata = {
  title: "Wanderlust | Add Your Next Destination",
  description: "User can add their future destination",
};

const AddDestinationPage = () => {
  return (
    <section className="my-10 lg:my-20 max-w-7xl mx-auto px-5">
      <div>
        <h2 className="mb-15 text-4xl sm:text-[60px] font-lora leading-relaxed">
          Add New Travel Package
        </h2>

        <div className="max-w-200 mx-auto">
          <AddDestinationForm addDestinationAction={addDestinationAction} />
        </div>
      </div>
    </section>
  );
};

export default AddDestinationPage;
