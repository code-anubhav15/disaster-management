import Link from "next/link";
import React from "react";

const FrontPage = () => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/front-img.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="absolute top-8 left-8 z-50">
          <img
            src="/images/logo1.png"
            alt="Logo"
            className="h-[100px] w-[200px] object-contain"
          />
        </div>

      {/* Get Started Button - Top Right */}
      <div className="absolute top-16 right-32 flex space-x-6 z-20">
        <Link href="/map">
          <button className="cursor-pointer backdrop-blur-md border border-white text-white font-semibold font-serif py-2 px-5 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:backdrop-blur-xl hover:bg-black/50 transition-all duration-300">
            Explore Map
          </button>
        </Link>
        <Link href="/tweets">
          <button className="cursor-pointer backdrop-blur-md border border-white text-white font-semibold font-serif py-2 px-5 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:backdrop-blur-xl hover:bg-black/50 transition-all duration-300">
            Latest Tweets
          </button>
        </Link>
      </div>

      {/* Main Heading and Description */}
      <div className="absolute inset-0 flex items-center ml-20 z-20">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold font-serif text-white">
            Real-Time Disaster Alerts. <br />
            Trusted Support.
          </h1>
          <p className="text-xl text-white font-sans font-semibold mt-2">
            Whether you're preparing, responding, or recovering,
            <br /> we're here to help you stay safe and resilient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
