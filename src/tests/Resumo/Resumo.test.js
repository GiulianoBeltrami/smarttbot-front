import Resumo from '../../components/Resumo/Resumo';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";

test('render Resumo geral operações text with custom class', async () => {
    await act(async () => await render(< Resumo />));
    const textElement = screen.getByText('Resumo geral operações');
    expect(textElement).toHaveClass('titleText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render Resumo de movimentação text with custom class', async () => {
    await act(async () => await render(< Resumo />));
    const textElement = screen.getByText('Resumo de movimentação');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render Total de transações realizadas text with custom class', async () => {
    await act(async () => await render(< Resumo />));
    const textElement = screen.getByText('Total de transações realizadas');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render results with negative dummyData', async () => {
    await act(async () => await render(< Resumo />));
    const resultElement = screen.queryByTestId('result');
    expect(resultElement).toHaveClass('negativeNumber');
    expect(resultElement).toBeInTheDocument();
    expect(resultElement).toBeVisible();
});

test('render transactions with elements', async () => {
    await act(async () => await render(< Resumo />));
    const transactionsElement = screen.queryByTestId('transactions');
    expect(transactionsElement).toBeInTheDocument();
    expect(transactionsElement).toBeVisible();
});

test('render Papéis negociados text with custom class', async () => {
    await act(async () => await render(< Resumo />));
    const textElement = screen.getByText('Papéis negociados');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});


test('render badge com nome do papel', async () => {
    await act(async () => await render(< Resumo />));
    const textElement = screen.getByText('WING20');
    expect(textElement).toHaveClass('badge');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render trasaction-number', async () => {
    await act(async () => await render(< Resumo />));
    const transactioNumberElement = screen.getAllByTestId('trasaction-number');
    expect(transactioNumberElement).toBeTruthy();
    expect(transactioNumberElement).toBeDefined();
});

