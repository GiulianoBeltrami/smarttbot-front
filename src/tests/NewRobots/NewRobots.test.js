import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import NewRobots from '../../components/NewRobots/NewRobots';

const testData = {
    "data": [
        {
            "id": 1,
            "name": "Raptor"
        }
    ]
}

test('render Adicionar novo robô text', async () => {
    await act(async () => await render(< NewRobots data={testData}/>));
    const textElement = screen.getByText('Adicionar novo robô');
    expect(textElement).toHaveClass('titleText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render new robot row button', async () => {
    await act(async () => await render(< NewRobots data={testData}/>));
    const buttonElement = screen.queryByTestId('NewRobotButton');
    expect(buttonElement).toBeEnabled();
});

test('render Você possui text', async () => {
    await act(async () => await render(< NewRobots data={testData}/>));
    const textElement = screen.queryByTestId('availableRobots');
    expect(textElement).toHaveClass('lightText');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

test('render logo image', async () => {
    await act(async () => await render(< NewRobots data={testData}/>));
    const textElement = screen.queryByTestId('logo');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});
