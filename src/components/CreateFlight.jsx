import React, { useState } from 'react';
import axios from 'axios';

const CreateFlight = () => {

    const [flightInfo, setFlightInfo] = useState({
        airline: '',
        origin: '',
        destination: '',
        departureTime: '',
        arrivalTime: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFlightInfo((prevFlightInfo) => ({
            ...prevFlightInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/add', flightInfo)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        console.log(flightInfo);
    };

    return (
        <div>
            <h2>Create New Flight</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Airline:
                    <input
                        type="text"
                        name="airline"
                        value={flightInfo.airline}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Origin:
                    <input
                        type="text"
                        name="origin"
                        value={flightInfo.origin}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Destination:
                    <input
                        type="text"
                        name="destination"
                        value={flightInfo.destination}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Departure Time:
                    <input
                        type="text"
                        name="departureTime"
                        value={flightInfo.departureTime}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Arrival Time:
                    <input
                        type="text"
                        name="arrivalTime"
                        value={flightInfo.arrivalTime}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Create Flight</button>
            </form>
        </div>
    );
};

export default CreateFlight;