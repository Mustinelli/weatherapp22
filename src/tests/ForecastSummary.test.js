import React from "react";
import Forecastsummary from '../../componenets/ForecastSummary'

describe('ForecastSummary', () => {
    const validProps = {...};
    it ('renders correctly', () => {...});
  
    it('renders correct values for props', () => {
      const { getByText } = render(
        <Forecastsummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
        />
      );
  
      expect(getByText('1111111')).toHaveAttribute('class', 'forecast-summary_date');
      expect(getByText('Stub description')).toHaveAttribute('class', 'forecast-summary_description');
      expect(getByText('stubIcon')).toHaveAttribute('class', 'forecast-summary_icon');
    });
  });