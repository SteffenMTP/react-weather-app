import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/searchCompon/Searchbar';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Forecast from './components/forecast-weather/Forecast';
import { Weather_API_URL, Weather_API_KEY } from './Api';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSeachChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_KEY}`)
    const ForecastFetch = fetch(`${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_KEY}`)

    Promise.all([currentWeatherFetch, ForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));

  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <>
    <div className="container">
      <Searchbar onSearchChange={handleOnSeachChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
    </>
  );
}

export default App;
