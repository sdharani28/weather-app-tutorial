const API_KEY = process.env.REACT_APP_API_KEY;

const fetchWeatherData = () => async (dispatch, getState) => {
    try {
        const location = getState()?.weatherReducer?.location;
        const response = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)).json();
        dispatch({ type: 'weather/updateWeatherData', payload: response ?? null });
    } catch (error) {
        console.error(`Error occured in fetchWeatherData action :: ${error}`);
        dispatch({ type: 'weather/updateWeatherData', payload: null });
    }
}

export { fetchWeatherData };