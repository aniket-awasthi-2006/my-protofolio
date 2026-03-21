import { render, screen } from '@testing-library/react';
import App from './App';

const originalFetch = global.fetch;

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({}),
    }),
  );
});

afterEach(() => {
  if (global.fetch && global.fetch.mockClear) {
    global.fetch.mockClear();
  }
});

afterAll(() => {
  global.fetch = originalFetch;
});

test('renders portfolio sections and tracks visit', async () => {
  render(<App />);

  expect(screen.getByText(/welcome to my portfolio/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/api/visitors'),
    expect.objectContaining({ method: 'POST' }),
  );
});
