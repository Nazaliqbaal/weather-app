import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  getWeatherForecast,
  getTenDayWeatherForecast,
  searchCity,
} from "./service/service";
import LocationList from "./components/LocationList";
import { dayNames } from "./constants/constant";
import WeatherBriefInfo from "./components/WeatherBriefInfo";
import WeatherDetails from "./components/WeatherDetails";
import WeatherHourly from "./components/WeaterHourly";
import DailyForecast from "./components/DailyForecast";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("Kasaragod");
  const [showLocationList, setShowLocationList] = useState(false);
  const [search, setSearch] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const debounceTimeout = useRef(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationList(false);
  };

  const handleLocationSearch = async (location) => {
    setShowLocationList(true);
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = location ? await searchCity(location) : [];
        setFilteredSearch(res);
        setSearch(location);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 1000);
  };

  const fetchWeatherForecast = async () => {
    let res = await getWeatherForecast(selectedLocation);
    setWeatherData(res);
  };
  const fetchtenDaysWeatherForecast = async () => {
    let res = await getTenDayWeatherForecast(selectedLocation);
    setForecastWeatherData(res);
  };

  useEffect(() => {
    fetchWeatherForecast(selectedLocation);
    fetchtenDaysWeatherForecast(selectedLocation);
  }, [selectedLocation]);
  return (
    <div className="container">
      <div className="relative">
        <SearchBar handleLoction={handleLocationSearch} />
        {showLocationList && search ? (
          filteredSearch.length > 0 ? (
            <LocationList
              locations={filteredSearch}
              setSelectedLocation={handleLocationSelect}
            />
          ) : (
            <div className="text-white text-sm bg-[#2a2a2f] w-full p-4 my-5 rounded-md absolute">
              No locations found.
            </div>
          )
        ) : null}
      </div>
      <WeatherBriefInfo weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData?.current} />
      <WeatherHourly weatherData={weatherData} />
      <DailyForecast weatherData={forecastWeatherData?.forecast?.forecastday} />
    </div>
  );
}

export default App;
