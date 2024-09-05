// src/components/ReviewCard.jsx
import React from "react";

const ReviewCard = ({
  reviewer,
  location,
  service,
  rating,
  review,
  date,
  helpers,
  cost,
  vehicle,
}) => {
  return (
    <div className="bg-white rounded-lg w-64 h-[300px] flex flex-col justify-between shadow-md p-4 m-4 min-w-[300px] ">
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/50" // Replace with dynamic image source
          alt={`${reviewer} profile`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="font-bold">{reviewer}</p>
          <p className="text-sm text-blue-600">{location}</p>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-600">
          Reviewing: <span className="text-blue-600">{service}</span>
        </p>
        <p className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-green-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.416 5.384 2.833 8.718-7.417-5.384-7.416 5.384 2.833-8.718-7.416-5.384h9.166z" />
            </svg>
          ))}
          <span className="text-sm ml-2">({rating} out of 5 rating)</span>
        </p>
      </div>
      <p className="text-sm text-gray-800 mb-2 break-words">{review}</p>
      <p className="text-xs text-gray-500">Reviewed on: {date}</p>
      <div className="flex justify-between text-sm mt-2">
        <div>
          Helpers: <span className="font-bold">{helpers}</span>
        </div>
        <div>
          Cost: <span className="font-bold">${cost}</span>
        </div>
        <div>
          Vehicle: <span className="font-bold">{vehicle}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
