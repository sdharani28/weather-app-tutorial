import { Provider } from "react-redux";

import Weather from "./components/Weather";

import store from "./redux/store";

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div>
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
