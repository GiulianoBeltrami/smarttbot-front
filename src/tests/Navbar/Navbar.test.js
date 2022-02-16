import Navbar from '../../components/Navbar/Navbar';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";

test('render Análise geral text', () => {
    render(<Navbar />);
    const textElement = screen.getByText('Análise geral');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render Principal text with syles', () => {
    render(<Navbar />);
    const textElement = screen.getByText('Principal');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
    expect(textElement).toHaveStyle('color:#00B39D');
});

test('render image on the left of navbar', () => {
    render(<Navbar />);
    const iconImageElement = screen.queryByTestId("barchart-icon");
    expect(iconImageElement).toBeInTheDocument();
    expect(iconImageElement).toBeVisible();
    expect(iconImageElement).toHaveAttribute('color');
});