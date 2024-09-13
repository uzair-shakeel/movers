import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [movers, setMovers] = useState(1);
  const [hours, setHours] = useState(1);
  const [trucks, setTrucks] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const baseRate = 50;
    const truckRate = 100;
    const totalPrice = movers * hours * baseRate + trucks * truckRate;
    setPrice(totalPrice);
  }, [movers, hours, trucks]);

  const handleGetMovers = () => {
    setMovers(1);
    setHours(1);
    setTrucks(1);
    setPrice(0);
    toast.success("Movers booked! Redirecting to home...");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-xl font-bold mb-4">Your Moving Price Estimate</h1>

      {/* Movers Input */}
      <div className="mb-6 w-full max-w-lg flex justify-between items-center">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Number of Movers:
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setMovers(movers > 1 ? movers - 1 : 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={movers}
            onChange={(e) => setMovers(parseInt(e.target.value))}
            className="w-16 text-center border-none focus:ring-0"
            min="1"
          />
          <button
            onClick={() => setMovers(movers + 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Hours Input */}
      <div className="mb-6 w-full max-w-lg flex justify-between items-center">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Number of Hours:
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setHours(hours > 1 ? hours - 1 : 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="w-16 text-center border-none focus:ring-0"
            min="1"
          />
          <button
            onClick={() => setHours(hours + 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Trucks Input */}
      <div className="mb-6 w-full max-w-lg flex justify-between items-center">
        <label className="block mb-2  text-sm font-medium text-gray-700">
          Number of Trucks:
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setTrucks(trucks > 1 ? trucks - 1 : 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={trucks}
            onChange={(e) => setTrucks(parseInt(e.target.value))}
            className="w-16 text-center border-none focus:ring-0"
            min="1"
          />
          <button
            onClick={() => setTrucks(trucks + 1)}
            className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Total Price Display */}
      <div className="text-lg font-semibold mb-24">
        Total Price: <span className="font-bold"> €{price.toFixed(2)}</span>
      </div>

      <div className="border-t border-gray-300 fixed max-w-lg mx-auto flex py-3 items-center justify-between bottom-0 w-full bg-white">
        <button
          onClick={() => navigate(-1)}
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

        <div className="flex flex-col py-3 items-center justify-center">
          <button
            onClick={handleGetMovers}
            className="bg-blue-600 text-white px-5 py-1 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Get Movers Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
