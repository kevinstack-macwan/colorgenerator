import { render, screen } from '@testing-library/react';
import App from './App';

test('Load application', () => {
  render(<App />);
  const appElement = screen.getByText(/Color Generator/i);
  expect(appElement).toBeInTheDocument();
});