import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
test('renders learn react link', () => {
  render(<App location = { forecast.location } />);
  const h1Element = screen.getByText(/Manchester, UK/i);
  expect(h1Element).toBeInTheDocument();
});
});
