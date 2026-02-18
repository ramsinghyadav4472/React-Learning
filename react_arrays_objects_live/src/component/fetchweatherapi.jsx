import React, { useState, useEffect } from "react";

export default function WFetchApi() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWeather(data.hourly);
            });
    }, []); // dependency array

    return (
        <div>
            <h1>Weather Fetch API</h1>

            {!weather ? (
                <p>Loading weather data...</p>
            ) : (
                <>
                    <h2>Hourly Forecast ({weather.time.length} entries)</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                        {weather.time.map((time, index) => (
                            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
                                <strong>{time.replace("T", " ")}</strong>
                                <p>Temp: {weather.temperature_2m[index]} °C</p>
                                <p>Humidity: {weather.relative_humidity_2m[index]} %</p>
                                <p>Wind: {weather.wind_speed_10m[index]} km/h</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
