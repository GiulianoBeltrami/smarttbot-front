import React from 'react';
import { render, screen } from '@testing-library/react';
import RobotsCard from '../../components/RobotsCard/RobotsCard';

const testData = {
    data: [{
        created_at: "2020-07-27 00:10:27",
        daily_balance: 4.45,
        id: 1648753,
        initial_capital: 67692.5,
        last_paper: {},
        mode: 0,
        movimentations: [],
        number_trades: 506,
        running: 0,
        simulation: 1,
        stock_codes: "RAIL3",
        strategy: "Hórus",
        title: "Eu Metus LLC",
        type: "Normal",
        updated_at: "2020-08-04 18:04:51"
    }]
}

const testData2 = {
    data: [{
        created_at: "2020-07-27 00:10:27",
        daily_balance: 4.45,
        id: 1648753,
        initial_capital: 67692.5,
        last_paper: {},
        mode: 1,
        movimentations: [],
        number_trades: 506,
        running: 0,
        simulation: 1,
        stock_codes: "RAIL3",
        strategy: "Hórus",
        title: "Eu Metus LLC",
        type: "Normal",
        updated_at: "2020-08-04 18:04:51"
    }]
}

test('show robot title', async () => {
    render(<RobotsCard data={testData} />);
    const textElement = await screen.findByText(testData?.data[0].title);
    expect(textElement).toBeInTheDocument();
})

test('show robot execution status Parado', async () => {
    render(<RobotsCard data={testData} />);
    const textElement = await screen.findByText("Parado");
    expect(textElement).toBeInTheDocument();
})

test('show robot execution status Em execução', async () => {
    render(<RobotsCard data={testData2} />);
    const textElement = await screen.findByText("Em execução");
    expect(textElement).toBeInTheDocument();
})

