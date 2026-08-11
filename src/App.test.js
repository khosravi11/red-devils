import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders key homepage content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Berkeley RED DEVILS/i, level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^team tryouts$/i, level: 2 })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: /family potluck/i, level: 2 })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /register for team tryouts/i, level: 2 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /see the red devils on ktvu/i, level: 2 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^our program$/i, level: 2 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /the red devils in action/i, level: 2 })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);

  const navigation = screen.getByRole('navigation');
  const navigationLinks = within(navigation).getAllByRole('link');
  expect(navigationLinks.map((link) => link.textContent.trim()).filter(Boolean)).toEqual([
    'Home',
    'About',
    'Coaches',
    'Register',
    'Partners',
    'Contact',
  ]);
  expect(within(navigation).getByRole('link', { name: /^about$/i })).toHaveAttribute(
    'href',
    '#about'
  );
  expect(
    within(navigation).queryByRole('link', { name: /^video$/i })
  ).not.toBeInTheDocument();
});

test('embeds the tryout registration form with a direct fallback link', () => {
  render(<App />);

  expect(
    screen.getByTitle(/berkeley red devils team tryout registration form/i)
  ).toHaveAttribute(
    'src',
    'https://docs.google.com/forms/d/e/1FAIpQLSc5SJP03FuVh54ofFRGLPZTI5LPOYXBs8RhxRs-RUV8p6Sjvg/viewform?embedded=true'
  );

  const fallbackLink = screen.getByRole('link', {
    name: /open it in a new tab/i,
  });
  expect(fallbackLink).toHaveAttribute('target', '_blank');
  expect(fallbackLink).toHaveAttribute('rel', 'noopener noreferrer');
});

test('opens the tryout flyer in a new tab without redundant carousel controls', () => {
  render(<App />);

  const tryoutLink = screen.getByRole('link', {
    name: /view tryout flyer \(opens in a new tab\)/i,
  });
  expect(tryoutLink).toHaveAttribute(
    'href',
    '/images/hero/team-tryouts-2026-27.jpg'
  );
  expect(tryoutLink).toHaveAttribute('target', '_blank');
  expect(tryoutLink).toHaveAttribute('rel', 'noopener noreferrer');
  expect(
    screen.queryByRole('button', { name: /show previous announcement/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: /show next announcement/i })
  ).not.toBeInTheDocument();
});
