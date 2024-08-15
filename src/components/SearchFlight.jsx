import React, { useState } from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { FaPlane } from "react-icons/fa6";
const SearchFlight = () => {
  const [flightType, setFlightType] = useState("roundtrip");
  const [landing, setLanding] = useState("");
  const [arrival, setArrival] = useState("");
  const [timePeriodFrom, setTimePeriodFrom] = useState("");
  const [timePeriodTo, setTimePeriodTo] = useState("");

  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl m-4 p-2 shadow-lg">
      <div className="flex items-start m-1">
        <FaPlane className="m-1" />
        <h6 className="font-semibold">BOOK YOUR FLIGHT</h6>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded-l-full font-semibold w-28 bg-[#4A0096] text-sm text-white p-2 mb-8"
          onClick={() => setFlightType("roundtrip")}
        >
          Roundtrip
        </button>
        <button
          className="rounded-r-full font-semibold w-24 bg-[#E6E0EB] text-sm text-[#4A0096] p-2 mb-8 "
          onClick={() => setFlightType("one way")}
        >
          One Way
        </button>
      </div>

      <div className="flex">
        <div className="flex rounded-l-full h-8 border border-[#E3E3E3] px-4 py-2">
          <MdFlightLand color="#4A0096" />
          <input
            className="focus:outline-none"
            type="text"
            value={landing}
            onChange={(e) => setLanding(e.target.value)}
          ></input>
        </div>
        <div className="flex rounded-r-full h-8 border border-[#E3E3E3] mx-1 px-4 py-2">
          <input
            className="focus:outline-none"
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          ></input>
          <MdFlightTakeoff color="#4A0096" />
        </div>
        <div>
            
        </div>
        <div className="flex rounded-l-full h-8 border border-[#E3E3E3] px-4 py-2">
          <BiCalendarEvent color="#4A0096" />
          <input
            className="focus:outline-none"
            type="text"
            value={timePeriodFrom}
            onChange={(e) => setTimePeriodFrom(e.target.value)}
          ></input>
        </div>
        <div className="flex rounded-r-full h-8 border border-[#E3E3E3] mx-1 px-4 py-2 ">
          <input
            className="focus:outline-none"
            type="text"
            value={timePeriodTo}
            onChange={(e) => setTimePeriodTo(e.target.value)}
          ></input>
          <BiCalendarEvent color="#4A0096" />
        </div>
      </div>
      <button
        className="rounded-lg font-semibold bg-[#4A0096] h-8 w-28 text-sm text-white py-1 mt-8"
        onClick={handleSearch}
      >
        Show Flights
      </button>
    </div>
  );
};

export default SearchFlight;
