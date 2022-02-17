import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BsFillCircleFill } from "react-icons/bs";

const RobotsCard = ({ data }) => {

    const testBot = [{
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

    const robots = data?.data;
    return (
        <Row>
            {testBot.map((element, index) => (
                <Card className="col-4 row-color mt-4 pt-2" key={index}>
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
                            <span style={{ border: '1px solid var(--buttonsColor)' }} className="lightText me-1 px-1">{element.strategy}</span>

                            <span className="lightText">{element.stock_codes}</span>
                            <span className="lightText">{element.type}</span>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Card>
            ))}
        </Row>
    )
}

export default RobotsCard