import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLocationArrow, FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";
<span></span>
export default function Header() {
    return (
        <header>
            <Container>
                <Row className>
                    <Col className="text-center">
                        <span><FaPhone /></span>
                        <span>877-644-9145</span>
                    </Col>
                    <Col className="text-center">
                        <span><FaEnvelope />  </span>
                        <span>info@protocallfinancial.com</span>
                    </Col>
                    <Col className="text-center">
                        <span> <FaLocationArrow /></span>
                        <span> 9900 West Park Suite 138, Houston, TX 77063</span>
                    </Col>
                    <Col className="d-flex gap-5 justify-content-center">
                        <a href="https://twitter.com/protocall2020"><FaTwitter size={'2vw'} /></a>
                        <a href="https://www.linkedin.com/company/protocall-financial/"><FaLinkedinIn size={'2vw'} /></a>
                        <a href="https://www.facebook.com/protocallfinancial/"><FaFacebook size={'2vw'} /></a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
