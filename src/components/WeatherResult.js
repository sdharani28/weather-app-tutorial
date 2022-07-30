import { useSelector } from "react-redux";

function WeatherResult() {
    const {
        weatherData,
        weatherCondition,
        temperature,
        windSpeed,
        pressure,
        humidity,
        weatherIcon } = useSelector(state => state.weatherReducer);

    if(!weatherData){
        return <></>
    }

    return (
        <div>
            <div className="weather-condition">{weatherCondition}</div>
            <div className="weather-result">
                <div className="weather-result-icon">
                    {weatherIcon !== '' && <img src={weatherIcon} alt={""} title={weatherCondition} />}
                </div>
                <div className="weather-result-temperature" title="Temperature" >
                    <h1>{temperature}</h1><span>°C</span>
                </div>
                <div className="weather-result-properties">
                    <div className="value" title="Wind Speed" >{windSpeed}
                        <span>m/s</span>
                    </div>
                    <div className="value" title="Wind Pressure" >{pressure}
                        <span>mm Hg</span>
                    </div>
                    <div className="value" title="Humidity" >{humidity}
                        <span>%</span>
                    </div>
                </div></div>
        </div>
    );
}

export default WeatherResult;
