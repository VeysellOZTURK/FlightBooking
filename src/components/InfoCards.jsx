import React from "react";

const InfoCards = () => {
  // Array of flight info cards
  const flightInfoCards = [
    {
        id: 1,
        airline: "Turkish Airlines",
        flightNumber: "TR001",
        departure: "Izmir",
        departureCode: "ADB",
        arrival: "Istanbul",
        arrivalCode: "SAW",
        departureTime: "18:25",
        arrivalTime: "19:25",
        price: 404.73,
        flightDate: "Wednesday 31 Mar",
        cabin: "Business",
        photo: "https://cdn.turkishairlines.com/m/14f15626e0a5407c/original/Turkish-Airlines-Small-3x-png.png"
    },
    {
        id: 2,
        airline: "Qatar Airlines",
        flightNumber: "QT001",
        departure: "Ankara",
        departureCode: "ESB",
        arrival: "Muş",
        arrivalCode: "MSR",
        departureTime: "10:30",
        arrivalTime: "14:45",
        price: 785.12,
        flightDate: "Friday 2 Apr",
        cabin: "First Class",
        photo: "https://airhex.com/images/airline-logos/qatar-airways.png"
    },
    {
        id: 3,
        airline: "Pegasus",
        flightNumber: "AJ041",
        departure: "Izmir",
        departureCode: "ADB",
        arrival: "Antalya",
        arrivalCode: "AYT",
        departureTime: "20:30",
        arrivalTime: "21:45",
        price: 120.99,
        flightDate: "Monday 5 Apr",
        cabin: "Economy",
        photo: "https://mediap.flypgs.com/awh/138/138/files/GorselArsiv/PGSlogo_i_ucaksiz.webp"
    },

  ];

  return (
    <div>
      {/* Map over the flight info cards */}
      {flightInfoCards.map((card) => (
        <div className="h-72 relative p-5 " key={card.id}>
        <div className=" max-w-full rounded-2xl bg-white flex flex-col overflow-hidden shadow-lg">
          <div className="flex flex-row items-baseline flex-nowrap bg-[#ffffff] p-2">
            <h1 className="ml-2 uppercase font-bold text-gray-500">
              departure
            </h1>
            <p className="ml-2 font-normal text-gray-500">{card.flightDate}</p>
          </div>
          <div className=" flex justify-start bg-white p-2">
            <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
              <p className="font-normal text-sm ml-1 text-gray-500">{card.cabin}</p>
            </div>
          </div>
          <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
            <div className="flex flex-row place-items-center p-2">
              <img
                src={card.photo}
                alt="Qatar Airways"
                className="w-10 h-10"
              />
              <div className="flex flex-col ml-2">
                <p className="text-xs text-gray-500 font-bold">{card.airline}</p>
                <p className="text-xs text-gray-500">{card.flightNumber}</p>
                <div className="text-xs text-gray-500">2*23kg</div>
              </div>
            </div>

            <div className="flex flex-col p-2">
              <p className="font-bold">{card.departureTime}</p>
              <p className="text-gray-500">
                <span className="font-bold">{card.arrivalCode}</span> 
              </p>
              <p className="text-gray-500">{card.arrival}</p>
            </div>
            <div className="flex flex-col flex-wrap p-2">
              <p className="font-bold">{card.arrivalTime}</p>
              <p className="text-gray-500">
                <span className="font-bold">{card.departureCode}</span> 
              </p>
              <p className="text-gray-500">{card.departure}</p>
            </div>
          </div>
          <div className="bg-[#ffffff] flex flex-col flex-wrap md:flex-nowrap">
            <div className="flex justify-between md:border-l-2 mx-6 md:border-dotted flex-row py-4 mr-6 flex-wrap">
              <div className="text-sm mx-2 flex flex-col ">
                <p>Flexible Ticket</p>
                <p className="font-bold">${card.price}</p>
                <p className="text-xs text-gray-500">Price per adult</p>
              </div>
              <button className="w-32 h-11 rounded-lg flex border-solid border text-white bg-[#4A0096] justify-center place-items-center">
                <div className="">Book Flight</div>
              </button>
            </div>
          </div>
        </div>
    
      </div>
      ))}
      
    </div>
  );
};

export default InfoCards;
