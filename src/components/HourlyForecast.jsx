import React from "react";
import { Clock } from "lucide-react";

const WeatherHourly = ({ weatherData }) => {
  const getFormattedHour = (date) => {
    const dateForm = new Date(date);
    let formattedHour = dateForm.getHours();
    return formattedHour;
  };

  const formatHour = (hour) => {
    const date = new Date();
    date.setHours(hour);
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return date.toLocaleString("en-US", options);
  };
  return (
    <div className="text-white bg-[#16161f] my-5 rounded-md ">
      <div className="flex gap-2 px-5 py-4 text-sm items-center">
        <Clock stroke="#333349" width={28} /> HOURLY FORECAST
      </div>
      <hr className="h-px bg-[#3d3d46] border-0 " />
      <div className="flex gap-3 justify-evenly flex-wrap px-4">
        {!weatherData ||
        !weatherData.forecast ||
        !weatherData.forecast.forecastday ||
        !Array.isArray(weatherData.forecast.forecastday) ? (
          <div>Loading...</div>
        ) : (
          weatherData.forecast.forecastday[0].hour
            .slice(
              getFormattedHour(weatherData.current.last_updated),
              getFormattedHour(weatherData.current.last_updated) + 6
            )
            .map((res, index) => (
              <div
                className="flex flex-col flex-wrap gap-2 p-2  items-center"
                key={res.time_epoch}
              >
                <span>
                  {index === 0
                    ? "Now"
                    : formatHour(new Date(res.time_epoch * 1000).getHours())}
                </span>
                <img src={res?.condition?.icon} alt="" className="max-w-6" />
                <div className="space-y-1">
                  <div>{res?.temp_c}°C</div>
                  <div className="text-xs text-center text-[#7c7c8c]">
                    {res?.feelslike_c}°C
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default WeatherHourly;
