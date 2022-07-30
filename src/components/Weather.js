import Search from "./Search";
import WeatherResult from "./WeatherResult";

function Weather() {

    return (
        <div className="weather-container">
            <Search />
            <WeatherResult />
        </div>
    );
}

export default Weather;
