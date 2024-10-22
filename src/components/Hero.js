import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"


const Hero = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleModal1Close = () => setShowModal1(false);
    const handleModal1Show = () => setShowModal1(true);

    return (
        // main hero section
        <section id="hero" >
            <div className="hero-overlay"></div>
            <div className="hero-background">
                <h1>"ENHANCE YOUR CREDIT & FINANCIAL CREDIBILITY"</h1>
                <p>Ever wanted to improve your credit score? Or do you want to repair your current credit and make it look better? With PROTOCALL FINANCIAL , say goodbye to bad credit!</p>
                <div className="mobile-container">
                    <Button className='hero-button' href="/credit" target="_blank"><span>Join us now!</span></Button>
                    <Button className='hero-button' href="https://www.smartcredit.com/?PID=60642" target="_blank"><span>Check your credit now!</span></Button>
                </div>
                <div className="mobile-container">
                    <Button className='hero-button' href="https://calendly.com/protocallfinancial" target="_blank"><span>Schedule an Appointment Today!</span></Button>
                    <Button className='affiliate-button hero-button' onClick={handleModal1Show}><span>Credit Building Products</span></Button>
                </div>
            </div>

            <Modal show={showModal1} onHide={handleModal1Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Tools you can use to help boost credit!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="affiliate-modal">
                    <p>Here at Protocall Financial, we have partnered with select affiliates in order to bring you great tools that will help you boost your credit at little to no cost to you!</p>
                    <p>Click on the links below to learn more about each product and how they can help you:</p>
                    <ul>
                        <li><a href="https://www.creditbuildercard.com/protocallfinancial.html" target="_blank">Credit Builder Card</a></li>
                        <li><a href="https://www.creditcardbroker.com/promos/feed14778" target="_blank">Credit Card Broker</a></li>
                        <li><a href="https://www.smartcredit.com/?PID=60642" target="_blank">Smart Credit</a></li>
                        <li><a href="https://member.identityiq.com/help-you-to-save-money.aspx?offercode=431141T3" target="_blank">Identity IQ</a></li>
                    </ul>
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default Hero;