import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const MovingForm = () => {
  const navigate = useNavigate();
  const service = JSON.parse(localStorage.getItem("service"));
  const tab = JSON.parse(localStorage.getItem("tab"));
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [loadingAddress, setLoadingAddress] = useState({
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    stairs: "0",
  });
  const [unloadingAddress, setUnloadingAddress] = useState({
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    stairs: "0",
  });
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Form validation function
  const validateForm = () => {
    // Check if arrival date and time are provided
    if (!arrivalDate || !arrivalTime) {
      return false;
    }

    // Validate loading address based on the tab
    if (tab === "Loading" || tab === "Both") {
      if (
        !loadingAddress.street ||
        !loadingAddress.city ||
        !loadingAddress.state ||
        !loadingAddress.zip
      ) {
        return false;
      }
    }

    // Validate unloading address based on the tab
    if (tab === "Unloading" || tab === "Both") {
      if (
        !unloadingAddress.street ||
        !unloadingAddress.city ||
        !unloadingAddress.state ||
        !unloadingAddress.zip
      ) {
        return false;
      }
    }

    // Validate contact info
    if (
      !contactInfo.firstName ||
      !contactInfo.lastName ||
      !contactInfo.email ||
      !contactInfo.phone
    ) {
      return false;
    }

    return true;
  };

  const handleGetMovers = () => {
    if (validateForm()) {
      toast.success("Congratulations!! Movers booked.");
      navigate("/");
    } else {
      toast.error("Please fill all required fields.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl text-center font-semibold mb-4">
        Enter the Details
      </h2>

      {/* Arrival Time Section */}
      <div className="mb-8">
        <label className="block mb-2 font-medium">Arrival Time</label>
        <input
          type="date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="time"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>

      {/* Loading Location Section */}
      {tab === "Loading" && (
        <div className="mb-8">
          <label className="block mb-2 font-medium">Loading location</label>
          <input
            type="text"
            placeholder="Street Address"
            value={loadingAddress.street}
            onChange={(e) =>
              setLoadingAddress({ ...loadingAddress, street: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Apartment, Suite, etc."
            value={loadingAddress.apt}
            onChange={(e) =>
              setLoadingAddress({ ...loadingAddress, apt: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <input
              type="text"
              placeholder="City or Town"
              value={loadingAddress.city}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, city: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="State"
              value={loadingAddress.state}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, state: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={loadingAddress.zip}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, zip: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-medium">Flights of Stairs</label>
            <select
              value={loadingAddress.stairs}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, stairs: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      )}

      {/* Unloading Address Section */}
      {tab === "Unloading" && (
        <div className="mb-8">
          <label className="block mb-2 font-medium">Unloading Address</label>
          <input
            type="text"
            placeholder="Street Address"
            value={unloadingAddress.street}
            onChange={(e) =>
              setUnloadingAddress({
                ...unloadingAddress,
                street: e.target.value,
              })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Apartment, Suite, etc."
            value={unloadingAddress.apt}
            onChange={(e) =>
              setUnloadingAddress({
                ...unloadingAddress,
                apt: e.target.value,
              })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <input
              type="text"
              placeholder="City or Town"
              value={unloadingAddress.city}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  city: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="State"
              value={unloadingAddress.state}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  state: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={unloadingAddress.zip}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  zip: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-medium">Flights of Stairs</label>
            <select
              value={unloadingAddress.stairs}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  stairs: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      )}

      {tab === "Both" && (
        <>
          <div className="mb-8">
            <label className="block mb-2 font-medium">Loading location</label>
            <input
              type="text"
              placeholder="Street Address"
              value={loadingAddress.street}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, street: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, etc."
              value={loadingAddress.apt}
              onChange={(e) =>
                setLoadingAddress({ ...loadingAddress, apt: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              <input
                type="text"
                placeholder="City or Town"
                value={loadingAddress.city}
                onChange={(e) =>
                  setLoadingAddress({ ...loadingAddress, city: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="State"
                value={loadingAddress.state}
                onChange={(e) =>
                  setLoadingAddress({
                    ...loadingAddress,
                    state: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={loadingAddress.zip}
                onChange={(e) =>
                  setLoadingAddress({ ...loadingAddress, zip: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-2">
              <label className="block mb-2 font-medium">
                Flights of Stairs
              </label>
              <select
                value={loadingAddress.stairs}
                onChange={(e) =>
                  setLoadingAddress({
                    ...loadingAddress,
                    stairs: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-medium">Unloading Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={unloadingAddress.street}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  street: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, etc."
              value={unloadingAddress.apt}
              onChange={(e) =>
                setUnloadingAddress({
                  ...unloadingAddress,
                  apt: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              <input
                type="text"
                placeholder="City or Town"
                value={unloadingAddress.city}
                onChange={(e) =>
                  setUnloadingAddress({
                    ...unloadingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="State"
                value={unloadingAddress.state}
                onChange={(e) =>
                  setUnloadingAddress({
                    ...unloadingAddress,
                    state: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={unloadingAddress.zip}
                onChange={(e) =>
                  setUnloadingAddress({
                    ...unloadingAddress,
                    zip: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-2">
              <label className="block mb-2 font-medium">
                Flights of Stairs
              </label>
              <select
                value={unloadingAddress.stairs}
                onChange={(e) =>
                  setUnloadingAddress({
                    ...unloadingAddress,
                    stairs: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </>
      )}

      {/* Contact Information Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="mb-4">
          Please provide the information of the person that will be the main
          point of contact for this move.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First Name"
            value={contactInfo.firstName}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, firstName: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={contactInfo.lastName}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, lastName: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={contactInfo.phone}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, phone: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>

      <button
        onClick={handleGetMovers}
        className="w-full bg-blue-600 text-white p-2 rounded font-medium"
      >
        Get Movers
      </button>
    </div>
  );
};

export default MovingForm;
