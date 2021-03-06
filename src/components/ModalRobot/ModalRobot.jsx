import React from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';



export const ModalRobot = ({ show, handleClose, onSubmit, data, inputs,setInputs }) => {

    const strategies = data?.data;

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <Modal backdropClassName="backDropColor" dialogClassName="modalWidth" size="lg" show={show} onHide={handleClose}>
                <Modal.Header className="pb-0" style={{ borderBottom: '0' }} closeButton>
                    <p className="titleText" style={{ fontSize: '16px' }}>Adicionar novo Robô</p>
                </Modal.Header>
                <Modal.Body className="ps-1 py-0">
                    <Container fluid>
                        <Row>
                            <Col>
                                <p className="titleText mb-0" style={{ fontSize: '25px', color: 'background: #5F5D60' }}>Vamos criar seu robô</p>
                                <p className="lightText">Preencha as informações abaixo</p>
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formProductName">
                                        <Form.Label className="formLabelText">Nome do produto</Form.Label>
                                        <Form.Control className="lightText py-2 px-2" placeholder="Nome do produto" value={inputs.title} name="title" onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formStartCapital">
                                        <Form.Label className="formLabelText">Capital inicial do robô</Form.Label>
                                        <Form.Control className="lightText py-2 px-2" type="number" placeholder="R$" value={inputs.initial_capital} name="initial_capital" onChange={handleChange} />
                                    </Form.Group>
                                    <Row className="mb-5">
                                        <Col className="col-12">
                                            <p className="titleText" style={{ fontWeight: '500' }}>Selecione uma das estratégias abaixo</p>
                                        </Col>
                                        <Col className="col-12">
                                            <div className="d-grid gap-2">
                                                {
                                                    strategies.map((element, index) => (
                                                        <Button type="button" className="strategyButton text-start p-3"
                                                            onClick={(e) => setInputs({ ...inputs, strategy_id: parseInt(e.target.value) + 1 })} key={index} value={index} size="lg">
                                                            {element.name}
                                                        </Button>
                                                    ))
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col className="col-6 text-start">
                                            <Button  onClick={handleClose} data-testid="closeModal" className="modalCancelButton">
                                                Cancelar
                                            </Button>
                                        </Col>
                                        <Col className="col-6 text-end">
                                            <Button type="submit" className="modalCreateButton" onClick={onSubmit}>
                                                Criar robô
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalRobot;