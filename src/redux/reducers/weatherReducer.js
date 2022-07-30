const initialState = {
    location: "Chennai",
    weatherData: null,
    weatherCondition: "",
    temperature: 0,
    windSpeed: 0,
    pressure: 0,
    humidity: 0,
    weatherIcon: "",
};

function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case "weather/updateLocation": {
            return { ...state, location: action.payload };
        }
        case "weather/updateWeatherData": {
            const tempWeatherData = action.payload;
            const weatherCondition = tempWeatherData?.['weather']?.[0]?.['description'];
            const temperature = (Math.round(((tempWeatherData?.['main']?.['temp'] - 273.15)) * 100) / 100).toFixed(1);
            const pressure = tempWeatherData?.['main']?.['pressure'];
            const humidity = tempWeatherData?.['main']?.['humidity'];
            const windSpeed = tempWeatherData?.['wind']?.['speed'];
            const weatherIcon = `http://openweathermap.org/img/w/${tempWeatherData?.['weather']?.[0]?.['icon']}.png`;
            return {
                ...state,
                weatherData: tempWeatherData,
                weatherCondition,
                temperature,
                windSpeed,
                pressure,
                humidity,
                weatherIcon,
            };
        }
        default:
            return state;
    }
}

export default weatherReducer;

