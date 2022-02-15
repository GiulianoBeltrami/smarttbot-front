import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsFillBarChartFill } from "react-icons/bs";


const Navbar = () => {
    return (
        <Row className="align-items-center py-3 row-color">
            <Col className="col-12">
                <div className=" hstack gap-2">
                    <BsFillBarChartFill data-testid="barchart-icon" color="#00B39D" size={22} />
                    <div className="vr mx-3" style={{ width: '2px', height: '33px', backgroundColor: '#DFDFDF' }}></div>
                    <span className="titleText">Análise geral</span> / <span style={{color: '#00B39D',fontWeight:'400' }}>Principal</span>
                </div>
            </Col>
        </Row>
    )
}

export default Navbar