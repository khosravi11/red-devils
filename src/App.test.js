import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders key homepage content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Berkeley RED DEVILS/i, level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /family potluck/i, level: 2 })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);
});

test('opens each announcement flyer in a new tab', () => {
  render(<App />);

  const potluckLink = screen.getByRole('link', {
    name: /view potluck flyer \(opens in a new tab\)/i,
  });
  expect(potluckLink).toHaveAttribute(
    'href',
    '/images/hero/family-potluck-2026.jpg'
  );
  expect(potluckLink).toHaveAttribute('target', '_blank');
  expect(potluckLink).toHaveAttribute('rel', 'noopener noreferrer');

  fireEvent.click(
    screen.getByRole('button', { name: /show next announcement/i })
  );

  const tryoutLink = screen.getByRole('link', {
    name: /view tryout flyer \(opens in a new tab\)/i,
  });
  expect(tryoutLink).toHaveAttribute(
    'href',
    '/images/hero/team-tryouts-2026-27.jpg'
  );
  expect(tryoutLink).toHaveAttribute('target', '_blank');
  expect(tryoutLink).toHaveAttribute('rel', 'noopener noreferrer');
});

test('supports carousel buttons, keyboard arrows, and swipe gestures', () => {
  render(<App />);

  const carousel = screen.getByRole('region', {
    name: /berkeley red devils announcements/i,
  });
  const potluckHeading = () =>
    screen.queryByRole('heading', { name: /family potluck/i, level: 2 });
  const tryoutHeading = () =>
    screen.queryByRole('heading', { name: /team tryouts/i, level: 2 });

  fireEvent.click(
    screen.getByRole('button', { name: /show next announcement/i })
  );
  expect(tryoutHeading()).toBeInTheDocument();

  fireEvent.keyDown(carousel, { key: 'ArrowLeft' });
  expect(potluckHeading()).toBeInTheDocument();

  fireEvent.touchStart(carousel, { touches: [{ clientX: 240 }] });
  fireEvent.touchEnd(carousel, { changedTouches: [{ clientX: 120 }] });
  expect(tryoutHeading()).toBeInTheDocument();
});
