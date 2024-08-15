import React from "react";
import suitcase from "../photos/suitcase.jpg";
import hotel from "../photos/hotel.jpg";
import car from "../photos/car.jpg";
import { FaHotel, FaUmbrellaBeach } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

const Adds = () => {
  return (
    <div className="flex flex-col mt-2 mr-4">
      <a href="/">
        <div
          style={{
            backgroundImage: `url(${car})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-xl w-48 min-h-48 brightness-100 hover:brightness-75 m-2"
        >
          <div className="absolute bottom-0 left-0 m-4">
            <FaCar className="w-6 h-6 mb-1" color="#FFFF" />
            <h1 className="text-white font-semibold">CAR RENTALS</h1>
          </div>
        </div>
      </a>

      <a href="/">
        <div
          style={{
            backgroundImage: `url(${hotel})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-xl w-48 min-h-48 brightness-100 hover:brightness-75 m-2"
        >
          <div className="absolute bottom-0 left-0 m-4">
            <FaHotel className="w-6 h-6 mb-1" color="#FFFF" />
            <h1 className="text-white font-semibold">HOTELS</h1>
          </div>
        </div>
      </a>
      <a href="/">
        <div
          style={{
            backgroundImage: `url(${suitcase})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-xl w-48 min-h-48 brightness-100 hover:brightness-75 m-2"
        >
          <div className="absolute bottom-0 left-0 m-4 brightness-100">
            <FaUmbrellaBeach className="w-6 h-6 mb-1" color="#FFFF" />
            <h1 className="text-white font-semibold">TRAVEL PACKAGES</h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Adds;
