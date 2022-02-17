import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BsFillCircleFill } from "react-icons/bs";

const RobotsCard = ({ data }) => {

    const testBot = [{
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

    const robots = data?.data;
    return (
        <Row>
            {testBot.map((element, index) => (
                <Card className="col-3 row-color mt-4 pt-2 ps-2 pe-2" key={index}>
                    <Row>
                        <Col className="col-6">
                            <span className="cardTitle">{element.title}
                            </span>
                        </Col>
                        <Col className="col-6 text-center">
                            <BsFillCircleFill className="me-1" size={10} color={`${element.mode === 1 ? 'var(--waterGreenColor)' : 'red'}`} />
                            <span>
                                {element.mode === 1 ? 'Em execução' : 'Parado'}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="lightText">#{element.id}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="robotCardTag lightText me-1 px-1">{element.strategy}</span>
                            <span className="robotCardTag lightText me-1 px-1">{element.stock_codes}</span>
                            <span className="robotCardTag lightText me-1 px-1">{element.type}</span>
                        </Col>
                    </Row>
                    <Row data-testid="cardRobotStatus" className="robotCardTag m-2">
                        <Col>
                            <Row className="align-items-center">
                                <Col className="col-4">
                                    <p className="cardStatusNumber text-start m-0 ps-2">{element.last_paper.position}</p>
                                </Col>
                                <Col className="col-5">
                                    <Row>
                                        <Col>
                                            <p>{element.last_paper.paper}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Compra</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-3">
                                    <Row>
                                        <Col>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                </Card>
            ))}
        </Row>
    )
}

export default RobotsCard