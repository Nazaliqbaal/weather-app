import React from "react";
import { Thermometer, CloudHail, Wind, Droplet, Sun } from "lucide-react";

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="text-white bg-[#16161f] my-5 rounded-md">
      <div className="p-5 rounded-md">
        <div className="flex justify-between py-4">
          <div className="flex gap-1">
            <Thermometer stroke="#333349" width={28} />
            <span className="text-[#7c7c8c]">Cloud</span>
          </div>
          <div className="text-[#7c7c8c]">{weatherData?.cloud}%</div>
        </div>
        <hr className="h-px bg-[#3d3d46] border-0 " />
        <div className="flex justify-between py-4">
          <div className="flex gap-1">
            <CloudHail stroke="#333349" width={28} />
            <span className="text-[#7c7c8c]">Precipitation(mm)</span>
          </div>
          <div className="text-[#7c7c8c]">{weatherData?.precip_in}</div>
        </div>
        <hr className="h-px bg-[#3d3d46] border-0 " />
        <div className="flex justify-between py-4">
          <div className="flex gap-1">
            <Wind stroke="#333349" width={28} />
            <span className="text-[#7c7c8c]">Wind Speed</span>
          </div>
          <div className="text-[#7c7c8c]">{weatherData?.wind_kph} KM/Hr</div>
        </div>
        <hr className="h-px bg-[#3d3d46] border-0 " />
        <div className="flex justify-between py-4">
          <div className="flex gap-1">
            <Droplet stroke="#333349" width={28} />
            <span className="text-[#7c7c8c]">Humidity</span>
          </div>
          <div className="text-[#7c7c8c]">{weatherData?.humidity}%</div>
        </div>
        <hr className="h-px bg-[#3d3d46] border-0 " />
        <div className="flex justify-between py-4">
          <div className="flex gap-1">
            <Sun stroke="#333349" width={28} />
            <span className="text-[#7c7c8c]">Indice UV</span>
          </div>
          <div className="text-[#7c7c8c]">{weatherData?.uv}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
