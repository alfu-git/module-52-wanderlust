import SignUpForm from "@/components/signUpPage/signUpForm/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="py-15 sm:py-20 bg-[#F9FAFC]">
      <div className="max-w-7xl w-full mx-auto px-5">
        <div>
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-4xl sm:text-5xl font-lora">
              Create Account
            </h2>

            <p className="text-[#6C696D] text-xl">
              Start your adventure with Wanderlust
            </p>
          </div>
        </div>

        <div className="max-w-150 mx-auto p-10 bg-white border border-[#EEEEEE] shadow shadow-[#000000]/12">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
