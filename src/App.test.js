import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders key homepage content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Berkeley RED DEVILS/i, level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^join the team$/i, level: 2 })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: /^team tryouts$/i, level: 2 })
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

test('opens the Join the Team flyer and shows its primary action', () => {
  render(<App />);
  const carousel = screen.getByRole('region', {
    name: /berkeley red devils announcements/i,
  });

  const joinTeamLink = within(carousel).getByRole('link', {
    name: /view join the team flyer \(opens in a new tab\)/i,
  });
  expect(joinTeamLink).toHaveAttribute(
    'href',
    '/pdf/berkeley-red-devils-join-the-team-2026-27.pdf'
  );
  expect(joinTeamLink).toHaveAttribute('target', '_blank');
  expect(joinTeamLink).toHaveAttribute('rel', 'noopener noreferrer');
  expect(
    within(carousel).getByRole('link', { name: /call coach scott/i })
  ).toHaveAttribute('href', 'tel:+15103658568');
});

test('does not show carousel controls for the single announcement', () => {
  render(<App />);

  const carousel = screen.getByRole('region', {
    name: /berkeley red devils announcements/i,
  });
  const slideStatus = within(carousel).getByText(
    /join the team\. slide 1 of 1\./i
  );
  expect(slideStatus).toHaveAttribute('aria-live', 'off');
  expect(
    screen.queryByRole('button', { name: /show previous announcement/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: /show next announcement/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: /pause automatic announcements/i })
  ).not.toBeInTheDocument();
});
