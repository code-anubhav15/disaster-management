'use client'
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-16 bg-gray-200">
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About ResQAlert</h2>
        <p className="text-gray-700 text-lg mb-4">
          Founded in 2023, ResQAlert is a real-time disaster management platform designed to keep individuals and communities safe during emergencies.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          We provide timely alerts, critical maps, and community updates using AI-powered systems and trusted data sources. Whether you're facing a natural disaster, health crisis, or local emergency, ResQAlert is your companion for staying informed and taking swift action.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 mt-6 backdrop-blur-2xl font-semibold transition cursor-pointer" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          Get In Touch
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          src="/images/about.png"
          alt="About Disaster Management"
          className="w-full h-145 rounded shadow-lg object-cover"
        />
      </div>

      
    </div>
  );
};

export default About;
