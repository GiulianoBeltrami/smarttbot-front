import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalRobot from '../../components/ModalRobot/ModalRobot';

test('show modal correctly', async () => {

    const handleClose = jest.fn();

    const { container } = render(<ModalRobot show={true} handleClose={handleClose} />);

    expect(container).toMatchSnapshot();

    expect(await screen.findByText('Vamos criar seu robô')).toBeInTheDocument();

});

test('close modal correctly', async () => {

    const handleClose = jest.fn();

    const { container } = render(<ModalRobot show={true} handleClose={handleClose} />);

    expect(container).toMatchSnapshot();

    fireEvent.click(await screen.findByTestId('closeModal'));

    expect(handleClose).toHaveBeenCalledTimes(1);
});

test('render Adicionar novo Robô text', async () => {
    const handleClose = jest.fn();
    const { container } = render(<ModalRobot show={true} handleClose={handleClose} />);
    expect(container).toMatchSnapshot();
    const textElement = await screen.findByText('Adicionar novo Robô');
    expect(textElement).toBeInTheDocument();
})


test('form with valid inputs', async () => {

    const handleClose = jest.fn();
    const handleSubmit = jest.fn();

    const { container } = await render(<ModalRobot show={true} handleClose={handleClose} onSubmit={handleSubmit} />);
    expect(container).toMatchSnapshot();

    fireEvent.change(screen.getByLabelText('Nome do produto'),{target:{value:"Robo1"}});
    fireEvent.change(screen.getByLabelText('Capital inicial do robô'),{target:{value:"250"}});

    fireEvent.click(screen.getByText('Criar robô'))
    expect(handleSubmit).toHaveBeenCalledTimes(1);
})
