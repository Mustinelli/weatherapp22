import "../styles/App.css";
import React from "react";
import Proptypes from "prop-types";
import "../components/LocationDetails";

function App() {
  function App(props) {
    const {location} = props;
  }
  return (
  <div className="App">
    <h1>Weather app</h1>
    <LocationDetails city = {location.city} country = {location.country}/>
    </div>
  );
}

export default App;
App.propTypes = {
  location: Proptypes.shape({
    city: Proptypes.string,
    country: Proptypes.string,
  }).isRequired
};