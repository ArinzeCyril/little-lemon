import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

afterEach(() => cleanup())
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/testimonials/i);
  expect(linkElement).toBeInTheDocument();
});
