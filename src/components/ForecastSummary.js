import React from "React";
import Proptypes from "prop-types";

function Forecastsummary(props){
    const {date, temperature, description, icon} = props
    return (
        <div className="forecast-summary">
            <div className="forecast-summary__date">{date}</div>
            <div className="forecast-summary__temperature">
                {temperature.max}
                &deg;C
                </div>
            <div className="forecast-summary_description">{description}</div>
            <div className="forecast-summary_icon">{icon}</div>

        </div>
    )
};

Forecastsummary.propTypes = {
    date : Proptypes.number.isRequired,
    description : Proptypes.string.isRequired,
    icon : Proptypes.string.isRequired,
    temperature : Proptypes.shape({
        min : Proptypes.number,
        max : Proptypes.number,
    }).isRequired

}
export default Forecastsummary;