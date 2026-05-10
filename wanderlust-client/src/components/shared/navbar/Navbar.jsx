"use client";
import React, { useState } from "react";
import { Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLink = (
    <>
      <li>
        <Link
          className={`
          text-base font-medium no-underline
      ${pathname === "/" ? "text-[#15A1BF] border-b border-[#15A1BF] rounded-none" : ""}
        `}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`
          text-base font-medium no-underline
      ${pathname === "/destinations" ? "text-[#15A1BF] border-b border-[#15A1BF] rounded-none" : ""}
        `}
        >
          Destinations
        </Link>
      </li>

      <li>
        <Link
          className={`
          text-base font-medium no-underline
      ${pathname === "/my-bookings" ? "text-[#15A1BF] border-b border-[#15A1BF] rounded-none" : ""}
        `}
        >
          My Bookings
        </Link>
      </li>

      <li>
        <Link
          className={`
        text-base font-medium no-underline
      ${pathname === "/admin" ? "text-[#15A1BF] border-b border-[#15A1BF] rounded-none" : ""}
        `}
        >
          Admin
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-white/40 backdrop-blur-sm  py-4 ">
      <header className="flex items-center justify-between max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul className="hidden items-center gap-8 lg:flex">{navLink}</ul>
        </div>

        <Link href="/" className="hidden sm:block">
          <Image
            src={"/assets/Wanderlast.png"}
            alt="Wanderlust Text png"
            width={162}
            height={24}
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/profile">
            <Button
              className={
                "p-0 bg-transparent w-full h-full text-base text-[#0c0b0b]"
              }
            >
              <UserRound /> Profile
            </Button>
          </Link>

          <Link href="/login">
            <Button
              className={
                "p-0 bg-transparent w-full h-full text-base text-[#0c0b0b]"
              }
            >
              Login
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              className={
                "p-0 bg-transparent w-full h-full text-base text-[#0c0b0b]"
              }
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mt-3 border-t border-separator lg:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLink}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
