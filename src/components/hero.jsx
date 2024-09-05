import React from "react";

const Hero = ({ heading, para }) => {
  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        {heading}
      </h1>
      <p className="text-center text-gray-600 mb-8">{para}</p>

      <div className="flex flex-col items-center w-full">
        <h2 className="text-lg font-medium text-center mb-6">
          Select a Service
        </h2>
        <div className="flex flex-row max-w-2xl p-4 justify-center items-center gap-6">
          {/* Movers Only Card */}
          <div className="bg-white shadow-lg  rounded-lg p-3 md:p-6 text-center cursor-pointer border-[2px] border-gray-200 hover:border-blue-400 ">
            <div className="h-24 w-24 md:h-40 md:w-40 overflow-hidden mx-auto my-4">
              <img
                src="/cta-labor2.webp"
                alt="Movers Only"
                className="mx-auto mb-4 w-full h-full object-cover"
              />
            </div>
            <button className="bg-blue-500 text-tiny md:text-medium text-white py-2 px-4 rounded-full w-full">
              Movers Only
            </button>
            <p className="text-gray-500 mt-2 text-tiny md:text-medium">
              Movers to help load/unload
            </p>
          </div>

          {/* Movers + Truck Card */}
          <div className="bg-white shadow-lg  rounded-lg p-3 md:p-6 text-center cursor-pointer border-[2px] border-gray-200 hover:border-blue-400 ">
            <div className="h-24 w-24 md:h-40 md:w-40 overflow-hidden mx-auto my-4">
              <img
                src="/cta-mpt.webp"
                alt="Movers + Truck"
                className="mx-auto mb-4 object-cover h-full w-full"
              />
            </div>
            <button className="bg-blue-500 text-tiny md:text-medium text-white py-2 px-4 rounded-full w-full">
              Movers + Truck
            </button>
            <p className="text-gray-500 mt-2 text-tiny md:text-medium">
              Save more time with a truck
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
