import { render, screen } from '@testing-library/react';
import App from './App';

test('renders key homepage content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Berkeley RED DEVILS/i, level: 1 })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);
});
