import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherBriefInfo = ({ weatherData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "long",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  return (
    <div className="my-5 bg-gradient-to-b from-[#302876] to-[#423472] bg- rounded-lg text-white ">
      <div className="p-5 flex flex-col justify-between ">
        <div className="mb-4">
          <h1 className="mb-1">{`${weatherData?.location?.name}, ${weatherData?.location?.region}, ${weatherData?.location?.country}`}</h1>
          <p className="text-xs">
            {formatDate(weatherData?.location?.localtime)}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-around">
            <div className="text-4xl mb-6">{weatherData?.current.temp_c}°C</div>
            <div>
              <p>
                {`Feels like`}{" "}
                <span className="font-semibold text-lg">
                  {weatherData?.current?.feelslike_c}°C
                </span>
              </p>
              <p>{weatherData?.current?.condition?.text}</p>
            </div>
          </div>
          <WeatherIcon
            conditionText={weatherData?.current?.condition?.text}
            iconCode={weatherData?.current?.condition?.code}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherBriefInfo;
