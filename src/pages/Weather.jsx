import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(() => {
    const savedWeather = localStorage.getItem("weather");
    return savedWeather ? JSON.parse(savedWeather) : null;
  });
  const [loading, setLoading] = useState(!weather); // Set loading based on initial weather state

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setWeather(data);
        localStorage.setItem("weather", JSON.stringify(data)); // Store the fetched data
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (!weather) {
      fetchWeather(); // Only fetch if we don't have weather data
    } else {
      setLoading(false); // If we have weather data, stop loading
    }
  }, [weather]);

  return (
    <div style={{ minHeight: "100px" }}>
      {loading ? (
        <div className="skeleton-loader" style={{ minHeight: "100px" }}>
          Loading...
        </div>
      ) : weather ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={weather.current.condition.icon}
            alt="weather icon"
            width="64"
            height="64"
            style={{ marginRight: "10px" }}
          />
          <h1>
            {weather.location.name} {weather.current.temp_c} °C
          </h1>
        </div>
      ) : (
        <h1>Error loading weather data.</h1>
      )}
    </div>
  );
};

export default Weather;
