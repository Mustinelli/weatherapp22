import "../styles/App.css";
import React from "react";
import Proptypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App(props) {
  return (
  <div className="App">
    <LocationDetails 
    city={props.location.city} 
    country={props.location.country}
    />
    </div>
  );
  }

App.propTypes = {
  location: Proptypes.shape({
    city: Proptypes.string,
    country: Proptypes.string,
  }).isRequired
};
export default App;