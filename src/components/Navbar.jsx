import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import ben from "../photos/ben.jpeg";
import { useNavigate } from "react-router-dom";
import { BiSolidPurchaseTag, BiWorld } from "react-icons/bi";
const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/MyFlights");
  };
  const homeNavigate = () => {
    navigate("/");
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <IoAirplaneSharp
          className="rounded-full m-2 h-8 w-8 bg-[#4A0096] shadow-lg"
          color="#F6F4F8"
        />
        <h2 className="font-semibold text-xl">PLANE SCAPE</h2>
      </div>
      <div className="flex items-center">
        <button href="" className="flex text-sm mx-2 font-semibold">
          <BiSolidPurchaseTag className="m-1" color="#4A0096" />
          Deals
        </button>
        <button onClick={homeNavigate} className="flex text-sm mx-4 font-semibold">
          <BiWorld className="m-1" color="#4A0096" />
          Discover
        </button>
        <button
          className="flex items-center text-sm mx-4 font-semibold"
          onClick={handleButtonClick}
        >
          <img className="rounded-full mx-2 h-8 w-8 " src={ben} alt="" />
          <p className="text-sm">Veysel OZTURK</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
