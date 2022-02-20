import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import logo from '../../assets/smartt.png';
import { ModalRobot } from '../../components/ModalRobot/ModalRobot';

const NewRobots = ({ data }) => {

    const [showModal, setShowModal] = React.useState(false);
    const [inputs, setInputs] = React.useState({ "title": "", "initial_capital": "", "strategy_id": "", "mode": 0, "simulation": 0, "broker_id": 1 });

    const strategies = data?.data;

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const onSubmit = async () => {
        return fetch("https://api-front-test.k8s.smarttbot.com/api/v1/robot", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <>
            <Row className="row-color mt-4">
                <Row className="py-3 mx-2 align-items-center">
                    <Col className="col-4 col-sm-2 col-md-2 col-lg-1 pe-0">
                        <Button data-testid="NewRobotButton" onClick={handleShow} className="p-2.5 newBotButton">
                            <img data-testid="logo" src={logo} alt="logo" style={{ width: '100%', height: '100%' }} />
                        </Button>
                        <ModalRobot show={showModal} data={data} handleClose={handleClose} onSubmit={onSubmit} inputs={inputs} setInputs={setInputs} />
                    </Col>
                    <Col className="col-8 col-sm-10 col-md-10 col-lg-11 text-start p-0">
                        <p className="titleText m-0" style={{ fontSize: '18px' }}>Adicionar novo robô</p>
                        <p className="lightText" data-testid="availableRobots">Você possui <span style={{ fontWeight: '700', color: 'var(--waterGreenColor)' }}>{strategies.length} Robôs</span> disponíveis</p>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default NewRobots