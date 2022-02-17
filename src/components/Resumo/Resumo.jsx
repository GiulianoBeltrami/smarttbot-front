import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextFormatter from '../../helpers/TextFormatter';

const Resumo = ({data}) => {

    const { moviment_summary, papers } = data?.data;

    const text = new TextFormatter(moviment_summary);
    let transactions = 0;
    papers.map((element) => transactions += parseInt(element.trasactions));

    return (
        <>
            <Row className="row-color mt-4">
                <Col className="col-12">
                    <Row>
                        <Col>
                            <p className="titleText py-2" style={{ fontSize: '18px' }}>Resumo geral operações</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <p className="lightText">Resumo de movimentação</p>
                            <p className={`fs-4 ${moviment_summary >= 0 ? 'positiveNumber' : 'negativeNumber'}`} data-testid="result">R${text.ChangeDotToComma()}</p>
                        </Col>
                        <Col className="text-end">
                            <p className="lightText">Total de transações realizadas</p>
                            <p className="fs-4 transactionNumber" data-testid="transactions">{transactions}</p>
                        </Col>
                    </Row>
                    <hr className="mt-0" />
                </Col>
                <Col className="col-12">
                    <Row>
                        <Col>
                            <p className="lightText">Papéis negociados</p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        {papers.map((element, index) => (
                            <Col className="col-12 col-sm-6 col-md-6" key={index}>
                                <Row>
                                    <Col className="col-2 col-sm-2 col-md-2 col-lg-1 ps-md-1.25 m-0" style={{ zIndex: '1' }}>
                                        <span className="badge badge-text" style={{ backgroundColor: 'var(--waterGreenColor)' }}>{element.name}</span>
                                    </Col>
                                    <Col className="col-6 col-sm-6 col-md-6 col-lg-9 p-0 m-0">
                                        <hr style={{ backgroundColor: '#C5C5C5', borderTop: '1px dashed' }} />
                                    </Col>
                                    <Col className="col-4 col-sm-4 col-md-4 col-lg-2 pe-md-1 m-0">
                                        <span className="text-end lightText">
                                            <span className="transactionNumber" data-testid="trasaction-number" style={{ color: '#000000' }}>
                                                {element.trasactions}
                                            </span>
                                            transações
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default Resumo