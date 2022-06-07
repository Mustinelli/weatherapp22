import react from react;
import Proptypes from "prop-types";


function LocationDetails(props) {
    const {city, country} = props;
    return <h1>{'${city}, ${country}'}</h1>;
}

export default LocationDetails;
LocationDetails.propTypes = {
    city: Proptypes.string.isRequired,
    country: Proptypes.string.isRequired
};