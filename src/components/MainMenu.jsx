import React from "react";
import Adds from "./Adds";
import SearchFlight from "./SearchFlight";
import InfoCards from "./InfoCards";
import Filter from "./Filter";
import Navbar from "./Navbar";

const MainMenu = () => {

  
  return (
    <div className=" bg-[#F6F4F8] overflow-auto  no-scrollbar w-full min-h-[700px] max-h-[640px] rounded-2xl p-2 shadow-[0px_10px_18px_0px_#b794f4] ">
      <Navbar />
      <div className="flex">
        <div className="">
          <SearchFlight />
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
              <div className="justify-self-end">
                <InfoCards />
              </div>
            </div>
            <Filter className="" />
          </div>
        </div>
        <Adds />
      </div>
    </div>
  );
};

export default MainMenu;
