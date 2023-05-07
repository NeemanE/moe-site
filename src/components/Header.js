import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLocationArrow, FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <Container fluid className="alert alert-primary">
                <Row className>
                    <Col className="text-center"><FaPhone />  877-644-9145</Col>
                    <Col className="text-center"><FaEnvelope />  info@protocallfinancial.com</Col>
                    <Col className="text-center"><FaLocationArrow />  9900 West Park Suite 138, Houston, TX 77063</Col>
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
