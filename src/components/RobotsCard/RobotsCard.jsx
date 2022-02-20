// import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { BsFillCircleFill } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import ObjectFieldsValidator from '../../helpers/ObjectFieldsValidator';
import TextFormatter from '../../helpers/TextFormatter';
import ObjectDateHandler from '../../helpers/ObjectDateHandler';
import moment from 'moment';

const RobotsCard = ({ data }) => {

    const robots = data?.data;
    const reverseRobots = [...robots].reverse();
    return (
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4" >
            {reverseRobots.map((robot, index) => {
                const daily_balance = new TextFormatter(robot.daily_balance);

                const today = moment();
                const date = new ObjectDateHandler(robot.movimentations, today);
                const filteredDate = date.findDate();

                let count = 0;
                filteredDate.map((obj, index) => count+= obj.value);

                return (
                        <Col className="gap-3">
                            <Card className=" row-color mt-4 pt-2 " key={index}>
                                <Container>
                                    <Row className="px-2">
                                        <Col className="col-7 p-0">
                                            <span className="cardTitle">{robot.title}
                                            </span>
                                        </Col>
                                        <Col className="col-5 text-end">
                                            <BsFillCircleFill className="me-1" size={10} color={`${robot.mode === 1 ? 'var(--waterGreenColor)' : 'red'}`} />
                                            <span style={{ color: 'var(--lightTextColor)', fontWeight: 'normal', fontSize: '14px' }}>
                                                {robot.mode === 1 ? 'Em execução' : 'Parado'}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row className="px-2">
                                        <Col className="p-0">
                                            <span className="lightText">#{robot.id}</span>
                                        </Col>
                                    </Row>
                                    <Row className="px-2">
                                        <Col className="p-0">
                                            <span className="robotCardTag lightText me-1 px-3">{robot.strategy}</span>
                                            <span className="robotCardTag lightText me-1 px-3">{robot.stock_codes}</span>
                                            <span className="robotCardTag lightText me-1 px-3">{robot.type}</span>
                                        </Col>
                                    </Row>
                                    <Row data-testid="cardRobotStatus" className="robotCardTag  py-2 my-2">
                                        <Col>
                                            <Row className="align-items-center p-0 m-0">
                                                <Col className="col-2 p-0">
                                                    <p className="cardStatusNumber text-center m-0">
                                                        {robot.last_paper && robot.last_paper.position ? robot.last_paper.position : <BsFillExclamationCircleFill color="var(--negativeNumberColor)" />}
                                                    </p>
                                                </Col>
                                                <Col className="col-5 p-0">
                                                    <Row>
                                                        <Col>
                                                            <p className="titleText text-start m-0" style={{ color: 'var(--cardPaperColor)' }}>
                                                                {robot.last_paper && robot.last_paper.paper ? robot.last_paper.paper : <BsFillExclamationCircleFill size={12} color="var(--negativeNumberColor)" />}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <p className="m-0" style={{ fontWeight: 'normal', fontSize: '12px' }}>Compra</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="col-5 p-0">
                                                    <Row>
                                                        <Col>
                                                            <p className="titleText text-start m-0" style={{ color: '#B1B0B2', fontWeight: '400', fontSize: '12px' }}>
                                                                {robot?.last_paper?.paper_value ? robot?.last_paper?.paper_value : "No data to display" }
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <span className={`m-0 ${robot?.last_paper?.profit <= 0 ? 'cardNegativeNumber' : 'cardPositiveNumber'}`}>
                                                                {robot?.last_paper?.profit <= 0 ? <GoTriangleDown data-testid="triangleDown" color="var(--negativeNumberColor)" /> : <GoTriangleUp data-testid="triangleUp" color="var(--waterGreenColor)" />}
                                                                R${robot?.last_paper?.profit ? robot?.last_paper?.profit : "0"}
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="px-2">
                                        <Col>
                                            <Row>
                                                <Col className="col-6 text-start">
                                                    <span className="lightText ">
                                                        Saldo diário <BsChevronDown className="ms-1" />
                                                    </span>
                                                </Col>
                                                <Col className="col-6 text-end">
                                                    <span className="lightText ">
                                                        Trades no dia
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row></Row>
                                        </Col>
                                    </Row>
                                    <Row className="px-2">
                                        <Col className="col-6">
                                            <p className={`fs-4 ${robot.daily_balance >= 0 ? 'positiveNumber' : 'negativeNumber'}`}>R${daily_balance.ChangeDotToComma()}</p>

                                        </Col>
                                        <Col className="col-6 text-end">
                                            <p className="tradesOnTheDay">
                                                {filteredDate !== [] ? `${count}` : '0'}
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                )
            })}
        </Row>
    )
}

export default RobotsCard