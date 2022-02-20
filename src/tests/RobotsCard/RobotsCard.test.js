import React from 'react';
import { render, screen } from '@testing-library/react';
import RobotsCard from '../../components/RobotsCard/RobotsCard';

const testData = {
    data: [{
        created_at: "2020-07-27 00:10:27",
        daily_balance: 4.45,
        id: 1648753,
        initial_capital: 67692.5,
        last_paper: {
            "robot_id": 1648757,
            "paper": "BOVA11",
            "position": 77,
            "type": 0,
            "paper_value": 72048.95,
            "profit": 74.81,
            "created_at": "2020-08-06 10:48:13",
            "id": 125001
        },
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
        last_paper: {
            "robot_id": 1648757,
            "paper": "BOVA11",
            "position": 77,
            "type": 0,
            "paper_value": 72048.95,
            "profit": -74.81,
            "created_at": "2020-08-06 10:48:13",
            "id": 125001
        },
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

test('show robots status on card', () => {
    render(<RobotsCard data={testData} />);
    const robotStatusOnCard = screen.queryByTestId("cardRobotStatus");
    expect(robotStatusOnCard).toBeInTheDocument();
})

test('show triangle up on profit', async () => {
    render(<RobotsCard data={testData} />);
    const triangleUpSvg = await screen.findByTestId("triangleUp");
    expect(triangleUpSvg).toBeInTheDocument();
})

test('show triangle down on profit', async () => {
    render(<RobotsCard data={testData2} />);
    const triangleDownSvg = await screen.findByTestId("triangleDown");
    expect(triangleDownSvg).toBeInTheDocument();
})