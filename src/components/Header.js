import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLocationArrow, FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import "../App.css"

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
                        <a className="header-logo" href="https://twitter.com/protocall2020" target="_blank"><FaTwitter /></a>
                        <a className="header-logo" href="https://www.linkedin.com/company/protocall-financial/" target="_blank"><FaLinkedinIn /></a>
                        <a className="header-logo" href="https://www.facebook.com/protocallfinancial/" target="_blank"><FaFacebook /></a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
