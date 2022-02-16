import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import fetchDummy from '../../Hooks/fetchDummy';
import TextFormatter from '../../helpers/TextFormatter';
import Loader from '../Loader/Loader';

const Resumo = () => {

    const [data, setData] = useState();

    const getData = async () => {
        const response = await fetchDummy();
        setData(response);
    }

    useEffect(() => {
        getData();
    }, [])

    if(!data) {
        return <Loader />;
    }

    const text = new TextFormatter(data.results);
    let transactions = 0;
    data.papers.map((element) => transactions += element.transactionsNumber);

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
                            <p className={`fs-4 ${data.results > 0 ? 'positiveNumber' : 'negativeNumber'}`} data-testid="result">R${text.ChangeDotToComma()}</p>
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
                        {data.papers.map((element) => (
                            <Col className="col-6">
                                <span className="badge badge-text" style={{backgroundColor:'var(--waterGreenColor)'}}>{element.name}</span>
                                <hr />
                                <span className="">{element.transactionsNumber}</span>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default Resumo