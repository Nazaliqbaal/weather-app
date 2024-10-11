// export function getWeather() {
//   return fetch(
//     "https://api.weatherapi.com/v1/current.json?q=new%delhi&key=4967f614a8234f9eaf775428240610"
//   ).then((res) => res.json());
// }

export function getWeatherForecast(selectedLocation = "Kasaragod") {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${selectedLocation}&key=4967f614a8234f9eaf775428240610`
  ).then((res) => res.json());
}

export function getTenDayWeatherForecast(location = "Kasaragod") {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=10&&key=4967f614a8234f9eaf775428240610`
  ).then((res) => res.json());
}

export function searchCity(location) {
  return fetch(
    `https://api.weatherapi.com/v1/search.json?q=${location}&key=4967f614a8234f9eaf775428240610`
  ).then((res) => res.json());
}
