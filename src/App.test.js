import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";

test('renders container with custom color', async () => {
  await act(async () => await render(<App />));
  const containerElement = screen.getByTestId('app-container');
  expect(containerElement).toBeVisible();
  expect(containerElement).toHaveStyle('background-color: #F5F5F5');
});





