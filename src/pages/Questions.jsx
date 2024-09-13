import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast for showing errors

const Questions = () => {
  const [selectedFlight, setSelectedFlight] = useState("");
  const [over300lbs, setOver300lbs] = useState(null);
  const [lift, setLift] = useState(null);
  const [heavyItems, setHeavyItems] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Validation: Ensure 'lift' and 'over300lbs' questions are answered
    if (lift === null) {
      toast.error("Please select whether there is a lift.");
      return;
    }
    if (over300lbs === null) {
      toast.error("Please answer the heavy items question.");
      return;
    }

    // Pass the form data via state
    const formData = { selectedFlight, over300lbs, lift, heavyItems };
    navigate("/result", { state: formData });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header */}

      {/* Heavy Items Question */}
      <div className="mb-8 mt-14 w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-1">Is there a lift? </h2>

        {/* Radio Buttons */}
        <div className="space-y-4">
          <div
            onClick={() => setLift("yes")}
            className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
              lift === "yes"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
          >
            <input
              id="yes"
              type="radio"
              name="lift"
              className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
              checked={lift === "yes"}
              onChange={() => setLift("yes")}
            />
            <label
              htmlFor="yes"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Yes
            </label>
          </div>

          <div
            onClick={() => setLift("no")}
            className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
              lift === "no"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
          >
            <input
              id="no"
              type="radio"
              name="lift"
              className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
              checked={lift === "no"}
              onChange={() => setLift("no")}
            />
            <label
              htmlFor="no"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </div>

      {lift === "no" && (
        <>
          <div className="text-start mb-8 w-full max-w-lg">
            <h1 className="text-lg font-semibold mb-1">
              Any stairs or heavy items?
            </h1>
            <p className="text-sm text-gray-500">
              A flight of stairs is four or more steps between floors.
            </p>
          </div>
          {/* Flights of Stairs Dropdown */}
          <div className="mb-6 w-full max-w-lg">
            <label htmlFor="flights" className="sr-only">
              Flights of Stairs
            </label>
            <select
              id="flights"
              className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              value={selectedFlight}
              onChange={(e) => setSelectedFlight(e.target.value)}
            >
              <option value="" disabled>
                Select flights of stairs...
              </option>
              <option value="1">1 flight</option>
              <option value="2">2 flights</option>
              <option value="3">3 flights</option>
              <option value="4">4+ flights</option>
            </select>
          </div>
        </>
      )}

      {/* Heavy Items Question */}
      <div className="mb-8 w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-1">
          Need help with items over 100 kgs?
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          This info helps your provider come prepared to handle all items
          carefully, and safely.
        </p>
        {/* Radio Buttons */}
        <div className="space-y-4">
          <div
            onClick={() => setOver300lbs("yes")}
            className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
              over300lbs === "yes"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
          >
            <input
              id="yes"
              type="radio"
              name="heavy-items"
              className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
              checked={over300lbs === "yes"}
              onChange={() => setOver300lbs("yes")}
            />
            <label
              htmlFor="yes"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Yes
            </label>
          </div>

          <div
            onClick={() => setOver300lbs("no")}
            className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
              over300lbs === "no"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
          >
            <input
              id="no"
              type="radio"
              name="heavy-items"
              className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
              checked={over300lbs === "no"}
              onChange={() => setOver300lbs("no")}
            />
            <label
              htmlFor="no"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </div>

      {/* Heavy Items Dropdowns */}
      <div className="w-full max-w-lg mb-40">
        <h2 className="text-sm font-medium text-gray-700 mb-2">
          Please specify the type of heavy items you have:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "100-150 lbs?", values: ["None", "1 item", "2 items"] },
            { label: "150-200 lbs?", values: ["None", "1 item", "2 items"] },
            { label: "Over 200 lbs?", values: ["None", "1 item", "2 items"] },
            {
              label: "Baby/Grand Pianos?",
              values: ["None", "1 piano", "2 pianos"],
            },
            {
              label: "Upright Pianos?",
              values: ["None", "1 piano", "2 pianos"],
            },
          ].map(({ label, values }) => (
            <div key={label}>
              <label
                htmlFor={label}
                className="block text-[12px] font-bold text-center text-gray-900 mb-1"
                style={{ minHeight: "15px" }} // Ensures consistent height
              >
                {label}
              </label>
              <select
                id={label}
                className="block w-full border  rounded-lg px-4 py-2 text-sm focus:outline-none  border-blue-300"
              >
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="border-t border-gray-300 fixed bottom-0 w-full bg-white">
        <div className="flex justify-between items-center py-6 max-w-lg mx-auto">
          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="text-blue-600 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
          >
            See Movers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
