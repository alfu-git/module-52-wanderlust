import AddDestinationForm from "@/components/addDestinationPage/addDestinationForm/AddDestinationForm";
import React from "react";

const AddDestinationPage = () => {
  return (
    <section className="my-10 lg:my-20 max-w-7xl mx-auto px-5">
      <div>
        <h2 className="mb-15 text-4xl sm:text-[60px] font-lora leading-relaxed">
          Add New Travel Package
        </h2>

        <div className="max-w-200 mx-auto">
          <AddDestinationForm />
        </div>
      </div>
    </section>
  );
};

export default AddDestinationPage;
