import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <div className=" p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-100 p-2 rounded-full">
              <img
                src="/handyman-services.png"
                alt="Home Assistant Gold"
                className="h-8 w-8"
              />
            </div>
            <span className="text-yellow-600 font-semibold">
              Home Assistant Gold
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Get moving and much more!
          </h1>
          <p className="text-gray-600">
            A proud member of the Porch Group family, HireAHelper is one of many
            convenient{" "}
            <a href="#" className="text-blue-500 underline">
              Porch Home Assistant
            </a>{" "}
            services for your home.
          </p>
          <p className="text-gray-600 font-semibold">
            Need more than just movers?{" "}
            <span className="font-normal">
              Book reliable service professionals for your home inspections,
              insurance needs, and any other type of home improvement project
              you have.
            </span>
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-500 font-semibold mt-2"
          >
            Find what you need{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/handyman-services.png"
            alt="Porch Team"
            className="h-[250px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
