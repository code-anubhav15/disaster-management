import React from "react";

const Feedback = () => {
  return (
    <div className="w-full h-screen px-6 py-12 md:px-20 bg-gray-200">
      {/* Top Image Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full mb-12">
        <img
          src="/images/get_in_touch1.png"
          alt="Partner Banner"
          className="w-full h-48 object-cover"
        />
        <img
          src="/images/get_in_touch2.png"
          alt="Partner Banner"
          className="w-full h-48 object-cover"
        />
        <img
          src="/images/get_in_touch3.png"
          alt="Partner Banner"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl font-bold text-gray-900 mb-6 font-serif">
            Provide Feedback: <br /> <hr />
            <br />
            Get In Touch
            <hr />
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-purple-700">Mailing Address</p>
              <p>123 ResQ Street, Safe City, State, Country 45678</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Email Address</p>
              <p>support@resqalert.com</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Phone Number</p>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
