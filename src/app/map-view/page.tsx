"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Select } from "antd";

// Lazy load Leaflet map to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

export default function MapViewPage() {
  const [isDisasterAlertActive, setIsDisasterAlertActive] = useState(true);
  const [isLatestTweetActive, setIsLatestTweetActive] = useState(true);
  const [isReliefCampsActive, setIsReliefCampsActive] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const mapRef = useRef<any>(null);

  const handleMyLocationClick = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 10);
          }

          try {
            const res = await axios.get(
              "https://nominatim.openstreetmap.org/reverse",
              {
                params: {
                  format: "jsonv2",
                  lat: latitude,
                  lon: longitude,
                },
                headers: {
                  "Accept-Language": "en",
                  "User-Agent": "DisasterMapApp/1.0 (contact@example.com)",
                },
              }
            );

            const { address } = res.data;
            const city =
              address.city ||
              address.town ||
              address.village ||
              address.hamlet ||
              "";
            const state = address.state || address.county || "";
            const country = address.country || "";

            const locationString = `${city}, ${state} (${country})`;
            toast.success(`Location set to: ${locationString}`);
          } catch (err) {
            console.error("Geocoding error:", err);
            toast.success("Location set (region unavailable)");
          } finally {
            setLoadingLocation(false);
          }
        },
        () => {
          toast.error("Location access denied ❌");
          setLoadingLocation(false);
        }
      );
    } else {
      toast.error("Geolocation not supported ⚠️");
    }
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Top-left sidebar */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-4 left-4 z-30"
      >
        <div className="flex flex-col space-y-3 text-black text-xl backdrop-blur-lg bg-black/20 p-3 rounded-xl shadow-md">
          {/* Disaster Alerts Toggle */}
          <motion.button
            onClick={() => setIsDisasterAlertActive(!isDisasterAlertActive)}
            title="Disaster Alerts"
            whileTap={{ scale: 0.9 }}
            className="relative h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300 bg-white/10"
          >
            <i className="fas fa-radiation text-black text-lg" />
            <AnimatePresence>
              {!isDisasterAlertActive && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="fas fa-ban text-[2.5rem]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Latest Tweets Toggle */}
          <motion.button
            onClick={() => setIsLatestTweetActive(!isLatestTweetActive)}
            title="Latest Tweets"
            whileTap={{ scale: 0.9 }}
            className="relative h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300 bg-white/10"
          >
            <i className="fas fa-users text-black text-lg" />
            <AnimatePresence>
              {!isLatestTweetActive && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="fas fa-ban text-[2.5rem]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Relief Camps Toggle */}
          <motion.button
            onClick={() => setIsReliefCampsActive(!isReliefCampsActive)}
            title="Relief Camps"
            whileTap={{ scale: 0.9 }}
            className="relative h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300 bg-white/10"
          >
            <i className="fas fa-tents text-black text-lg" />
            <AnimatePresence>
              {!isReliefCampsActive && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="fas fa-ban text-[2.5rem]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Static Icons */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleMyLocationClick}
            className="h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300 bg-white/10"
            title="Set My Location"
          >
            {loadingLocation ? (
              <div className="flex space-x-1">
                <span className="h-1.5 w-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-1.5 w-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-1.5 w-1.5 bg-black rounded-full animate-bounce"></span>
              </div>
            ) : (
              <i className="fas fa-location" />
            )}
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFilterClicked(!isFilterClicked)}
            className="h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300"
            title="Filter"
          >
            <i className="fas fa-filter" />
          </motion.div>
        </div>
      </motion.div>

{isFilterClicked && (
  <motion.div
    initial={{ x: -40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="absolute top-4 left-24 z-30"
  >
    <div className="flex flex-col text-black text-base backdrop-blur-lg bg-white/10 border border-white/20 p-4 rounded-xl shadow-xl min-w-[280px]">
      <div className="w-full">
        <Select
          mode="multiple"
          allowClear
          showSearch
          value={selectedFilters}
          placeholder="Select disaster types"
          className="w-full blur-select-custom"
          options={[
            { label: "Flood", value: "flood" },
            { label: "Earthquake", value: "earthquake" },
            { label: "Cyclone", value: "cyclone" },
            { label: "Drought", value: "drought" },
            { label: "Wildfire", value: "wildfire" },
          ]}
          filterOption={(
            input: string,
            option?: { label: string; value: string }
          ) =>
            (option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          onChange={(value: string[]) => setSelectedFilters(value)}
          dropdownStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
          }}
          maxTagCount={undefined}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(6px)",
            borderRadius: 8,
            minHeight: 48,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        />

        
        <div className="flex flex-row space-x-5">
          <button
            onClick={() => setSelectedFilters([])}
            title="Clear filters"
            className="mt-3 flex items-center justify-center border-2 p-1 rounded gap-2 text-sm text-red-600 hover:text-red-800 transition cursor-pointer"
          >
            <i className="fas fa-trash" />
            <span>Reset Filters</span>
          </button>
        <button
            onClick={() => setSelectedFilters([])}
            title="Clear filters"
            className="mt-3 flex items-center justify-center gap-2 border-2 p-1 rounded text-sm text-teal-600 hover:text-teal-800 transition cursor-pointer"
          >
            <i className="fas fa-save" />
            <span>Save Filters</span>
          </button>
        </div>
      </div>
    </div>
  </motion.div>
)}



      {/* Bottom-left sidebar */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-4 left-4 z-30"
      >
        <div className="flex flex-col space-y-3 text-black text-xl backdrop-blur-lg bg-black/20 p-3 rounded-xl shadow-md">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300"
            title="Legends"
          >
            <i className="fas fa-location-dot" />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="h-12 w-12 flex items-center justify-center border border-black/30 rounded-full cursor-pointer hover:bg-white/20 transition duration-300"
            title="Logout"
          >
            <i className="fas fa-right-from-bracket" />
          </motion.div>
        </div>
      </motion.div>

      {/* Map */}
      <div className="w-full h-full">
        <LeafletMap mapRef={mapRef} />
      </div>
    </div>
  );
}
