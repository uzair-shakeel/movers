import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast

const Hero = ({ heading, para }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Loading");
  const navigate = useNavigate();

  // State for input fields
  const [loadingZip, setLoadingZip] = useState("");
  const [loadingDate, setLoadingDate] = useState("");
  const [unloadingZip, setUnloadingZip] = useState("");
  const [unloadingDate, setUnloadingDate] = useState("");

  // Function to handle service selection
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedTab("Loading"); // Reset tab to Loading when changing service
  };

  const handleNavigation = () => {
    if (selectedTab === "Loading") {
      if (!loadingZip || !loadingDate) {
        toast.error("Please fill in all loading fields.");
        return;
      }
    } else if (selectedTab === "Unloading") {
      if (!unloadingZip || !unloadingDate) {
        toast.error("Please fill in all unloading fields.");
        return;
      }
    } else if (selectedTab === "Both") {
      if (!loadingZip || !loadingDate || !unloadingZip || !unloadingDate) {
        toast.error(
          "Please fill in all fields for both loading and unloading."
        );
        return;
      }
    }
    if (selectedService === "Movers Only") {
      navigate("/questions");
    } else {
      navigate("/initialQuestions");
    }

    // navigate("/questions", { state: selectedService });
  };

  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        {heading}
      </h1>
      <p className="text-center text-gray-600 mb-8">{para}</p>

      <div className="flex flex-col items-center w-full">
        {!selectedService && (
          <h2 className="text-lg font-medium text-center mb-6">
            Select a Service
          </h2>
        )}

        {selectedService === null && (
          <div className="flex flex-row max-w-4xl p-4 justify-center items-center gap-6">
            <div
              onClick={() => handleServiceClick("Movers Only")}
              className="bg-white shadow-lg md:w-[300px] rounded-lg p-3 md:p-6 text-center cursor-pointer border-[2px] border-gray-200 hover:border-blue-400"
            >
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

            <div
              onClick={() => handleServiceClick("Movers + Truck")}
              className="bg-white shadow-lg md:w-[300px] rounded-lg p-3 md:p-6 text-center cursor-pointer border-[2px] border-gray-200 hover:border-blue-400"
            >
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
        )}

        {selectedService === "Movers Only" && (
          <div className="w-full max-w-3xl p-6 bg-white rounded-lg border border-gray-300">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col justify-between">
                <div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="mb-4 flex items-center text-gray-800 font-bold px-3 py-1 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-300 duration-300 cursor-pointer"
                  >
                    <span className="mr-2">
                      <FaArrowLeftLong className="text-blue-500" size={20} />
                    </span>{" "}
                    Go Back
                  </button>
                </div>
                <div className="bg-white hidden md:block md:w-[250px] rounded-lg p-3 md:p-6 text-center cursor-pointer border-[1.3px] border-blue-400">
                  <div className="h-24 w-24 md:h-[120px] pb-6 md:w-[120px] overflow-hidden mx-auto my-4">
                    <img
                      src="/cta-labor2.webp"
                      alt="Movers Only"
                      className="mx-auto mb-4 w-full h-full object-cover"
                    />
                  </div>
                  <button className="bg-blue-500 text-tiny md:text-sm text-white py-2 px-4 rounded-full w-full">
                    Movers Only
                  </button>
                  <p className="text-gray-500 mt-2 text-tiny md:text-sm">
                    Movers to help load/unload
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
                  Tell Us About Your Move
                </h2>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-4">
                    <button
                      onClick={() => setSelectedTab("Loading")}
                      className={`py-2 px-4 rounded-full ${
                        selectedTab === "Loading"
                          ? "bg-gray-800 text-white"
                          : "border-gray-800 border text-gray-800"
                      }`}
                    >
                      Loading
                    </button>
                    <button
                      onClick={() => setSelectedTab("Unloading")}
                      className={`py-2 px-4 rounded-full ${
                        selectedTab === "Unloading"
                          ? "bg-gray-800 text-white"
                          : "border-gray-800 border text-gray-800"
                      }`}
                    >
                      Unloading
                    </button>
                    <button
                      onClick={() => setSelectedTab("Both")}
                      className={`py-2 px-4 rounded-full ${
                        selectedTab === "Both"
                          ? "bg-gray-800 text-white"
                          : "border-gray-800 border text-gray-800"
                      }`}
                    >
                      Loading + Unloading
                    </button>
                  </div>

                  {/* Conditional input fields based on tab */}
                  <div className="flex flex-col gap-4 mt-4">
                    {selectedTab === "Loading" && (
                      <>
                        <div className="relative">
                          <input
                            type="text"
                            className="border rounded-md p-3 w-full"
                            placeholder="Loading ZIP Code"
                            value={loadingZip}
                            onChange={(e) => setLoadingZip(e.target.value)}
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="date"
                            className="border rounded-md p-3 w-full"
                            placeholder="Loading Date"
                            value={loadingDate}
                            onChange={(e) => setLoadingDate(e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {selectedTab === "Unloading" && (
                      <>
                        <div className="relative">
                          <input
                            type="text"
                            className="border rounded-md p-3 w-full"
                            placeholder="Unloading ZIP Code"
                            value={unloadingZip}
                            onChange={(e) => setUnloadingZip(e.target.value)}
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="date"
                            className="border rounded-md p-3 w-full"
                            placeholder="Unloading Date"
                            value={unloadingDate}
                            onChange={(e) => setUnloadingDate(e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {selectedTab === "Both" && (
                      <>
                        <div className="grid grid-cols-2 gap-9">
                          <div className="relative">
                            <input
                              type="text"
                              className="border rounded-md p-3 w-full"
                              placeholder="Loading ZIP Code"
                              value={loadingZip}
                              onChange={(e) => setLoadingZip(e.target.value)}
                            />
                          </div>

                          <div className="relative">
                            <input
                              type="text"
                              className="border rounded-md p-3 w-full"
                              placeholder="Unloading ZIP Code"
                              value={unloadingZip}
                              onChange={(e) => setUnloadingZip(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-9">
                          <div className="relative">
                            <input
                              type="date"
                              className="border rounded-md p-3 w-full"
                              placeholder="Loading Date"
                              value={loadingDate}
                              onChange={(e) => setLoadingDate(e.target.value)}
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="date"
                              className="border rounded-md p-3 w-full"
                              placeholder="Unloading Date"
                              value={unloadingDate}
                              onChange={(e) => setUnloadingDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Compare Mover Prices Button */}
                  <button
                    onClick={handleNavigation}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full mt-6 w-full"
                  >
                    Compare Mover Prices
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedService === "Movers + Truck" && (
          <div className="w-full max-w-3xl p-6 bg-white rounded-lg border border-gray-300">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col justify-between">
                <div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="mb-4 flex items-center text-gray-800 font-bold px-3 py-1 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-300 duration-300 cursor-pointer"
                  >
                    <span className="mr-2">
                      <FaArrowLeftLong className="text-blue-500" size={20} />
                    </span>{" "}
                    Go Back
                  </button>
                </div>

                <div className="bg-white hidden md:block md:w-[250px] rounded-lg p-3 md:p-6 text-center cursor-pointer border-[1.3px] border-blue-400">
                  <div className="h-24 w-24 md:h-[120px] pb-6 md:w-[120px] overflow-hidden mx-auto my-4">
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
              <div>
                <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
                  Tell Us About Your Move
                </h2>

                <div className="flex flex-col justify-between gap-24">
                  {/* Conditional input fields based on tab */}
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="grid grid-cols-2 gap-9">
                      <div className="relative">
                        <input
                          type="text"
                          className="border rounded-md p-3 w-full"
                          placeholder="Loading ZIP Code"
                          value={loadingZip}
                          onChange={(e) => setLoadingZip(e.target.value)}
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          className="border rounded-md p-3 w-full"
                          placeholder="Unloading ZIP Code"
                          value={unloadingZip}
                          onChange={(e) => setUnloadingZip(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-9">
                      <div className="relative">
                        <input
                          type="date"
                          className="border rounded-md p-3 w-full"
                          placeholder="Loading Date"
                          value={loadingDate}
                          onChange={(e) => setLoadingDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Compare Mover Prices Button */}
                  <div>
                    <button
                      onClick={handleNavigation}
                      className="bg-blue-500 text-white py-2 px-4 rounded-full mt-6 w-full"
                    >
                      Compare Mover Prices
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
