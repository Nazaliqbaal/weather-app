import { iconMapping } from "../constants/constant";

const WeatherIcon = ({ iconCode, conditionText }) => {
  let iconSrc;
  if (conditionText === "Sunny") {
    iconSrc = iconMapping[1000]["Sunny"];
  } else if (conditionText === "Clear") {
    iconSrc = iconMapping[1000]["Clear"];
  } else {
    iconSrc = iconMapping[iconCode]
      ? iconMapping[iconCode] || "./1.svg"
      : "./1.svg";
  }

  return (
    <div className="max-w-[475px]">
      <img src={iconSrc} alt={conditionText} />
    </div>
  );
};

export default WeatherIcon;
