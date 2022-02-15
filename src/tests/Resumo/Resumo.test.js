import Resumo from '../../components/Resumo/Resumo';
import { render, screen } from '@testing-library/react';

test('render Resumo geral operações text with custom class', () => {
    render(<Resumo />);
    const textElement = screen.getByText('Resumo geral operações');
    expect(textElement).toHaveClass('titleText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render Resumo de movimentação text with custom class', () => {
    render(<Resumo />);
    const textElement = screen.getByText('Resumo de movimentação');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});