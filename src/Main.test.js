import { render, screen } from '@testing-library/react';
import App from './Main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/full stack data/i);
  expect(linkElement).toBeInTheDocument();  
});
