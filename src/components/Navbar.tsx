import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-around items-center border-b-1 border-gray-300 shadow-2xl bg-black text-white">
      <div className="flex flex-row items-center">
        <img
          src="/images/logo1.png"
          alt=""
          className="w-50 h-25 object-contain"
        />
      </div>
      <div>
        <div className="flex flex-row items-center gap-12">
          <Link
            href="/"
            className="flex flex-row items-center border-2  px-2.5 py-1 gap-2"
          >
            <i className="fa-solid fa-house"></i>Home
          </Link>
          <Link
            href="/relief-camps"
            className="flex flex-row items-center border-2  px-2.5 py-1 gap-2"
          >
            <i className="fa-solid fa-tents"></i>Relief Camps
          </Link>
          <Link
            href="/about"
            className="flex flex-row items-center border-2  px-2.5 py-1 gap-2"
          >
            <i className="fa-solid fa-address-card"></i>About
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <Link href="/login">
          <button className="flex flex-row items-center border-2 px-2.5 py-1 gap-2 cursor-pointer">
            <i className="fa-solid fa-right-to-bracket"></i>Login
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="flex flex-row items-center border-2 px-2.5 py-1 gap-2 cursor-pointer">
            <i className="fa-solid fa-user-plus"></i>Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
