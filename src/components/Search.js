import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeatherData } from "../redux/reducers/actions";

function Search() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.weatherReducer.location);

    const [tempLocation, setTempLocation] = useState(location);

    useEffect(() => {
        setTempLocation(location);
        if(location && location !== ''){
            dispatch(fetchWeatherData());
        }
    }, [location]);

    return (
        <div className="search" >
            <h1>Right now in</h1>
            <div>
                <input
                    type="text"
                    value={tempLocation}
                    onChange={e => setTempLocation(e.target.value)}
                    onBlur={e => dispatch({
                        type: 'weather/updateLocation',
                        payload: e.target.value
                    })} />
            </div>
        </div>
    );
}

export default Search;
