const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1/forecast.json";

const fetchWeatherData = async (endpoint) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export function getWeatherForecast(selectedLocation = "Kasaragod") {
  const endpoint = `${baseUrl}?q=${selectedLocation}&key=${apiKey}`;
  return fetchWeatherData(endpoint);
}

export function getTenDayWeatherForecast(location = "Kasaragod") {
  const endpoint = `${baseUrl}?q=${location}&days=10&key=${apiKey}`;
  return fetchWeatherData(endpoint);
}

export function searchCity(location) {
  const endpoint = `https://api.weatherapi.com/v1/search.json?q=${location}&key=${apiKey}`;
  return fetchWeatherData(endpoint);
}
