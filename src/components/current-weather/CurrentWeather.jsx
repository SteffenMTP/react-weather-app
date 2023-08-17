import React from 'react'
import "./CurrentWeather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-desc'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weatherIcon' />
            </div>
            <div className="buttom">
                <p className="temperature">{data.main.temp.toFixed()}&#176;C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{data.main.feels_like.toFixed()}&#176;C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed.toFixed()} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity.toFixed()} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Preasure</span>
                        <span className="parameter-value">{data.main.pressure.toFixed()} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather