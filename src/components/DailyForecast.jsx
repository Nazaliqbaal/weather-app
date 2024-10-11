import React from "react";
import { Calendar } from "lucide-react";
import { dayNames } from "../constants/constant";

const DailyForecast = ({ weatherData }) => {
  const getFormattedDay = (date) => {
    const dateForm = new Date(date);
    const formattedDayIndex = dateForm.getDay();
    return dayNames[formattedDayIndex];
  };

  return (
    <div className="text-white bg-[#16161f] my-5 rounded-md">
      <div className="flex gap-2 px-5 py-4 text-sm items-center">
        <Calendar stroke="#333349" width={28} /> 10-DAY FORECAST
      </div>
      <hr className="h-px bg-[#3d3d46] border-0" />
      {weatherData?.map((res) => (
        <div className="p-5 py-4" key={res.date}>
          {" "}
          {/* Assuming `date` is unique */}
          <div className="flex justify-between py-2">
            <div className="flex-1">
              {res.date === new Date().toISOString().split("T")[0]
                ? "Today"
                : getFormattedDay(res.date)}
            </div>
            <div className="flex-1 flex justify-center">
              <img className="w-6" src={res.day.condition.icon} alt="" />
            </div>
            <div className="flex-1 text-center">
              {Math.round(res.day.mintemp_c)}°C
            </div>
            <div className="flex-1 text-center">
              {Math.round(res.day.avgtemp_c)}°C
            </div>
            <div className="flex-1 text-center">
              {Math.round(res.day.maxtemp_c)}°C
            </div>
          </div>
          <hr className="h-px bg-[#3d3d46] border-0" />
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
