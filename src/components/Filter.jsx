import React, { useState } from 'react';

const Filter = () => {
    const [sortBy, setSortBy] = useState('');

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div className='grow-0 p-4 m-4'>
            <label className='m-2'>
                <h1 className='font-semibold'>Sort by:</h1> 
                <select className='p-1 rounded-lg shadow-lg mb-2' value={sortBy} onChange={handleSortByChange}>
                    <option value="">None</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="-price">Price (High to Low)</option>
                    <option value="rating">Rating (Low to High)</option>
                    <option value="rating">Rating (High to Low)</option>
                </select>
            </label><br></br>
            <label className='m-2'>
            <h1 className='font-semibold'>Arrival Time:</h1> 
                <div className='flex items-center my-1'>
                    <input
                        type="radio"
                        id="morning"
                        name="arrivalTime"
                        value="morning"
                        className=' text-[#4A0096] bg-gray-100 border-gray-300'
                    />
                    <label className='ml-4 font-semibold text-xs' >5:00 AM - 11:59 AM</label>
                </div>
                <div className='flex items-center my-1'>
                    <input
                        type="radio"
                        id="afternoon"
                        name="arrivalTime"
                        value="afternoon"
                    />
                    <label  className='ml-4 font-semibold text-xs'>12:00 PM - 5:59 PM</label>
                </div>
            </label>
            <label >
            <h1 className='font-semibold'>Stops:</h1>
                <div  className='flex flex-row items-center my-1'>
                    <input
                        type="radio"
                        id="non-stop"
                        name="stops"
                        value="non-stop"
                    />
                    <label className='ml-4 font-semibold text-xs'>Nonstop</label>
                </div>
                <div  className='flex flex-row items-center my-1'>
                    <input
                        type="radio"
                        id="1-stop"
                        name="stops"
                        value="1-stop"
                    />
                    <label className='ml-4 font-semibold text-xs'>1 Stop</label>
                </div>
                
                <div className='flex flex-row items-center my-1'>
                    <input
                        type="radio"
                        id="2-stop"
                        name="stops"
                        value="2-stop"
                    />
                    <label className='ml-4 font-semibold text-xs'>2+ Stop</label>
                </div>
            </label>
            {/* Rest of the filter options */}
        </div>
    );
};

export default Filter;