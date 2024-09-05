import React from "react";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 p-6 items-center justify-between  max-w-5xl mx-auto bg-white  rounded-lg">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">
          A Worry-Free Moving Experience
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>HireAHelper</strong> has been helping people move for over{" "}
          <strong>16 years.</strong>
          All MC#/DOT licenses, verified user reviews, and additional insurance
          policies are clearly listed, so you'll feel extra good about Moving
          Day.
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔️</span>
            License & insurance policies are clearly listed
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">💬</span>
            Excellent customer support
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">💚</span>
            Our moms are very proud of us. You will be, too!
          </li>
        </ul>
        <div className="flex items-center justify-center md:justify-start">
          <button className="px-4 py-2  bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
            Find movers &rarr;
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0 flex justify-center">
        {/* Replace the following div with an actual image element */}
        <div className="w-[350px] h-[350px] p-6 flex items-center justify-center">
          {/* Placeholder for illustration */}
          <img
            src="/moving-experience.png"
            alt="Relaxed person illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
