import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalRobot from '../../components/ModalRobot/ModalRobot';

const testData = {
    data: [
        {
            "id": 1,
            "name": "Raptor"
        }
    ]
}

const handleClose = jest.fn();
const onSubmit = jest.fn(e => e.preventDefault());

const input = { "title": "", "initial_capital": "", "strategy_id": "", "mode": 0, "simulation": 0, "broker_id": 1 };
const setInput = jest.fn();

test('show modal correctly', async () => {
    const { container } = render(<ModalRobot show={true} handleClose={handleClose} onSubmit={onSubmit} data={testData} inputs={input} setInputs={setInput}/>);
    expect(container).toMatchSnapshot();
    expect(await screen.findByText('Vamos criar seu robô')).toBeInTheDocument();

});

test('close modal correctly', async () => {
    const { container } = render(<ModalRobot show={true} handleClose={handleClose} onSubmit={onSubmit} data={testData} inputs={input} setInputs={setInput}/>);
    expect(container).toMatchSnapshot();
    fireEvent.click(await screen.findByTestId('closeModal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
});

test('render Adicionar novo Robô text', async () => {
    const { container } = render(<ModalRobot show={true} handleClose={handleClose} onSubmit={onSubmit} data={testData} inputs={input} setInputs={setInput}/>);
    expect(container).toMatchSnapshot();
    const textElement = await screen.findByText('Adicionar novo Robô');
    expect(textElement).toBeInTheDocument();
})


test('form with valid inputs', () => {
    const { container } = render(<ModalRobot show={true} handleClose={handleClose} onSubmit={onSubmit} data={testData} inputs={input} setInputs={setInput}/>);
    expect(container).toMatchSnapshot();
    fireEvent.change(screen.getByLabelText('Nome do produto'), { target: { value: "Robo1" } });
    fireEvent.change(screen.getByLabelText('Capital inicial do robô'), { target: { value: "250" } });
    fireEvent.click(screen.getByText('Criar robô'))
    expect(onSubmit).toHaveBeenCalledTimes(1);
})
