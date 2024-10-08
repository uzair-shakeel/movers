import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast for showing errors

const InitialQuestions = () => {
  const [zipCode, setZipCode] = useState("");
  const [propertyType, setPropertyType] = useState("Apartment/Condo");
  const [bedrooms, setBedrooms] = useState("1 Bedroom");
  const [parking, setParking] = useState(null);
  const [permit, setPermit] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure 'lift' and 'over300lbs' questions are answered
    if (propertyType === null) {
      toast.error("Please select a property type.");
      return;
    }
    if (bedrooms === null) {
      toast.error("Please select the number of bedrooms.");
      return;
    }
    if (parking === null) {
      toast.error("Please answer the parking question.");
      return;
    }
    if (zipCode === null || "") {
      toast.error("Please enter the zip code.");
      return;
    }

    // Pass the form data via state
    const formData = { propertyType, bedrooms, parking, permit, zipCode };
    navigate("/questions", { state: formData });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mt-9">
            Let's build the perfect move!
          </h1>
          <p className="text-gray-500 mt-2">
            We need a few more details about your starting location to build a
            custom moving plan just for you.
          </p>
        </div>

        {/* Starting ZIP */}
        <div className="mb-6">
          <label className="block text-left mb-2 text-lg font-semibold text-gray-700">
            Starting ZIP
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter ZIP Code"
            className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Property Type */}
        {/* Property Type */}
        <div className="mb-6">
          <label className="block text-left mb-2 text-lg font-semibold  text-gray-700">
            Property type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Ground floor">Ground floor</option>
            <option value="Basement">Basement</option>
            <option value="Mezzanine floor">Mezzanine floor</option>
            <option value="Cellar / Basement">Cellar / Basement</option>
            <option value="House">House</option>
            <option value="Warehouse">Warehouse</option>
            <option value="1st floor with Lift">1st floor with Lift</option>
            <option value="1st floor without Lift">
              1st floor without Lift
            </option>
            <option value="2nd floor with Lift">2nd floor with Lift</option>
            <option value="2nd floor without Lift">
              2nd floor without Lift
            </option>
            <option value="3rd floor with Lift">3rd floor with Lift</option>
            <option value="3rd floor without Lift">
              3rd floor without Lift
            </option>
            <option value="4th floor with Lift">4th floor with Lift</option>
            <option value="4th floor without Lift">
              4th floor without Lift
            </option>
            <option value="5th floor with Lift">5th floor with Lift</option>
            <option value="5th floor without Lift">
              5th floor without Lift
            </option>
            <option value="6th floor with Lift">6th floor with Lift</option>
            <option value="6th floor without Lift">
              6th floor without Lift
            </option>
            <option value="7th floor with Lift">7th floor with Lift</option>
            <option value="7th floor without Lift">
              7th floor without Lift
            </option>
          </select>
        </div>

        {/* Number of Bedrooms */}
        <div className="mb-6">
          <label className="block text-left mb-2 text-lg font-semibold text-gray-700">
            How many bedrooms?
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="5 Bedrooms">5 Bedrooms</option>
          </select>
        </div>

        <div
          className={`${
            parking === "no" ? "mb-8" : "mb-[120px]"
          }  mt-14 w-full max-w-lg`}
        >
          <h2 className="text-lg font-semibold mb-1">
            Is there parking available for my Truck?{" "}
          </h2>

          {/* Radio Buttons */}
          <div className="space-y-4">
            <div
              onClick={() => setParking("yes")}
              className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
                parking === "yes"
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              <input
                id="yes"
                type="radio"
                name="parking"
                className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
                checked={parking === "yes"}
                onChange={() => setParking("yes")}
              />
              <label
                htmlFor="yes"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Yes
              </label>
            </div>

            <div
              onClick={() => setParking("no")}
              className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
                parking === "no"
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              <input
                id="no"
                type="radio"
                name="parking"
                className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
                checked={parking === "no"}
                onChange={() => setParking("no")}
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

        {parking === "no" && (
          <div className="mb-8 mt-14 w-full max-w-lg">
            {/* <h2 className="text-lg font-semibold mb-1">
            Is there parking available for my Truck?{" "}
          </h2> */}

            {/* Radio Buttons */}
            <div className="space-y-4">
              <div
                onClick={() => setPermit("yes")}
                className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
                  permit === "yes"
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  id="yes"
                  type="radio"
                  name="permit"
                  className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
                  checked={permit === "yes"}
                  onChange={() => setPermit("yes")}
                />
                <label
                  htmlFor="yes"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Get me a parking permit
                </label>
              </div>

              <div
                onClick={() => setPermit("no")}
                className={`flex items-center p-3 rounded-md border-[1.8px] cursor-pointer ${
                  permit === "no"
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  id="no"
                  type="radio"
                  name="permit"
                  className="h-4 w-4 border-gray-300 focus:ring-blue-500 rounded-full"
                  checked={permit === "no"}
                  onChange={() => setPermit("no")}
                />
                <label
                  htmlFor="no"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  I will get a parking permit for the truck myself
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="border-t px-4 border-gray-300 fixed bottom-0 right-0 left-0  w-full bg-white">
          <div className="flex justify-between  items-center py-6 max-w-lg mx-auto">
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
              Continue
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
      </form>
    </div>
  );
};

export default InitialQuestions;
