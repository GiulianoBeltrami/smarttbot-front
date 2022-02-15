import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
import TextFormatter from '../../helpers/TextFormatter';

const Resumo = () => {

    const { results, papers } = useFetch();

    const text = new TextFormatter(results);

    let transactions = 0;
    papers.map((element) => transactions += element.transactionsNumber);

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
                            <p className={`fs-4 ${results > 0 ? 'positiveNumber' : 'negativeNumber'}`} data-testid="result">R${text.ChangeDotToComma()}</p>
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
                    <Row>
                        <Col>
                        
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default Resumo