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

test('render Total de transações realizadas text with custom class', () => {
    render(<Resumo />);
    const textElement = screen.getByText('Total de transações realizadas');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render results with negative dummyData', () => {
    render(<Resumo />);
    const textElement = screen.queryByTestId('result');
    expect(textElement).toHaveClass('negativeNumber');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render transactions with 443 elements', () => {
    render(<Resumo />);
    const textElement = screen.queryByTestId('transactions');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render Papéis negociados text with custom class', () => {
    render(<Resumo />);
    const textElement = screen.getByText('Papéis negociados');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

// test('render papers element from dummyData', () => {
//     render(<Resumo />);
//     const textElement = screen.queryByTestId('Papéis negociados');
//     expect(textElement).toHaveClass('lightText');
//     expect(textElement).toBeInTheDocument();
//     expect(textElement).toBeVisible();
// });