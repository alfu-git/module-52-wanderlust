import LogInForm from "@/components/logInPage/logInForm/LogInForm";
import React from "react";

export const metadata = {
  title: "Wanderlust | Log-In",
  description: "Wanderlust app user login page",
};

const LogInPage = () => {
  return (
    <section className="py-15 sm:py-20 bg-[#F9FAFC]">
      <div className="max-w-7xl w-full mx-auto px-5">
        <div>
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-4xl sm:text-[42px] font-bold">
              Welcome Back
            </h2>

            <p className="text-[#6C696D] text-xl">
              Resume your adventure with Wanderlust
            </p>
          </div>
        </div>

        <div className="max-w-150 mx-auto p-10 bg-white border border-[#EEEEEE] shadow shadow-[#000000]/12">
          <LogInForm />
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
