"use client";
import React, { useState } from "react";
import { Envelope, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { handleGoogleLogin } from "@/lib/googleAuth";

const LogInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("Sign In successful");
    }
  };

  return (
    <div className="w-full">
      <Form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email address</Label>
          <InputGroup className={"bg-[#F8FAFC] border border-[#EEEEEE]"}>
            <InputGroup.Prefix>
              <Envelope className="size-4 text-muted" />
            </InputGroup.Prefix>

            <InputGroup.Input placeholder="Enter your email" />
          </InputGroup>
          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <div className="relative w-full">
            <InputGroup className="w-full bg-[#F8FAFC] border border-[#EEEEEE]">
              <InputGroup.Prefix>
                <LockKeyhole className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                className="pr-10"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Create a password"
              />
            </InputGroup>

            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {isPasswordVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button
          isDisabled={loading}
          className={
            "w-full h-14 bg-[#15A1BF] rounded-none text-[#FFFFFF] font-medium"
          }
          type="submit"
        >
          {loading ? "Signing..." : "Sign In"}
        </Button>
      </Form>

      <div className="mt-4">
        <div className="mb-4 flex items-center">
          <div className="grow border-t border-[#EFEFEF]"></div>

          <span className="mx-2 text-[#6C696D] text-lg">Or sign up with</span>

          <div className="grow border-t border-[#EFEFEF]"></div>
        </div>

        <Button
          onClick={handleGoogleLogin}
          className={
            "w-full h-14 bg-transparent border border-[#EEEEEE] rounded-none text-[#0C0B0B] font-medium gap-2"
          }
        >
          <Image
            src="/assets/google.png"
            alt="Google png"
            width={20}
            height={20}
          />

          <span>Sign Up With Google</span>
        </Button>

        <p className="mt-6 flex flex-wrap gap-1 items-center text-lg justify-center">
          <span className="text-[#6C696D]">Already have an account?</span>

          <Link href={"/sign-up"} className="text-[#15A1BF] font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;
