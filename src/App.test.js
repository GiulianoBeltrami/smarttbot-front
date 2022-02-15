import { render, screen } from '@testing-library/react';
import App from './App';

test('renders container with custom color', () => {
  render(<App />);
  const containerElement = screen.getByTestId('app-container');
  expect(containerElement).toBeVisible();
  expect(containerElement).toHaveStyle('background-color: #F5F5F5');
});





