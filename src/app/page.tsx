"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-black bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/front-img.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Logo */}
      <div className="absolute top-8 left-8 z-50">
        <img
          src="/images/logo1.png"
          alt="Disaster Response App Logo"
          className="h-[100px] w-[200px] object-contain"
        />
      </div>

      {/* Buttons - Top Right */}
      <motion.div
        className="absolute top-16 right-8 md:right-32 flex flex-wrap gap-4 z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <Link
          href="/map-view"
          className="inline-block cursor-pointer backdrop-blur-md border border-white text-white font-semibold font-serif py-2 px-5 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:backdrop-blur-xl hover:bg-black/50 transition-all duration-300"
        >
          Explore Map
        </Link>

        <Link
          href="/tweets"
          className="inline-block !cursor-pointer backdrop-blur-md border border-white text-white font-semibold font-serif py-2 px-5 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:backdrop-blur-xl hover:bg-black/50 transition-all duration-300"
        >
          Latest Tweets
        </Link>
        <Link
          href="/tweets"
          className="inline-block !cursor-pointer backdrop-blur-md border border-white text-white font-semibold font-serif py-2 px-5 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:backdrop-blur-xl hover:bg-black/50 transition-all duration-300"
        >
          About Us
        </Link>
      </motion.div>

      {/* Heading and Description */}
      <motion.div
        className="absolute inset-0 flex items-center justify-start pl-6 md:pl-20 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        <div className="space-y-4 text-left">
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white">
            Real-Time Disaster Alerts.
            <br />
            Trusted Support.
          </h1>
          <p className="text-base md:text-xl text-white font-sans font-semibold mt-2">
            Whether you're preparing, responding, or recovering,
            <br className="hidden md:block" /> we're here to help you stay safe
            and resilient.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
