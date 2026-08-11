import { fireEvent, render, screen } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

const originalMatchMedia = window.matchMedia;

const mockMatchMedia = (matches) => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
};

afterEach(() => {
  window.matchMedia = originalMatchMedia;
  jest.restoreAllMocks();
});

test('autoplays when reduced motion is not requested', () => {
  mockMatchMedia(false);
  const intervalSpy = jest.spyOn(window, 'setInterval');

  render(<ImageCarousel />);

  expect(intervalSpy).toHaveBeenCalledWith(expect.any(Function), 4500);
});

test('disables autoplay but keeps manual controls under reduced motion', () => {
  mockMatchMedia(true);
  const intervalSpy = jest.spyOn(window, 'setInterval');

  render(<ImageCarousel />);

  expect(intervalSpy).not.toHaveBeenCalled();

  fireEvent.click(screen.getByRole('button', { name: /show next slide/i }));
  expect(screen.getByRole('img', { name: /red devils gallery 2/i })).toBeInTheDocument();

  fireEvent.keyDown(
    screen.getByRole('region', { name: /red devils photo gallery/i }),
    { key: 'ArrowLeft' }
  );
  expect(screen.getByRole('img', { name: /red devils gallery 1/i })).toBeInTheDocument();
});
