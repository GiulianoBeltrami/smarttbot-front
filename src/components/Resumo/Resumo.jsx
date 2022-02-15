import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Resumo = () => {
    return (
        <>
            <Row className="row-color">
                <Row>
                    <Col>
                        <p className="titleText">Resumo geral operações</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="titleText">Resumo de movimentação</p>
                    </Col>
                </Row>
            </Row>

        </>
    )
}

export default Resumo