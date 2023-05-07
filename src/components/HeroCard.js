import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { FaCalendarCheck, FaUserTie, FaRocket } from "react-icons/fa";
import protocallLogo from "../img/protocall-logo.png"
import "../App.css"

export default function HeroCard() {
    return (
        <section>
            <div>
                <CardGroup>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title>24/7 Online Support <FaCalendarCheck /></Card.Title>
                            <Card.Text>Follow your dispute status online with your own personal portal.</Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Personalized Attention <FaUserTie /></Card.Title>
                            <Card.Text>We will keep you informed throughout the entire process</Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Super Fast Results! <FaRocket /></Card.Title>
                            <Card.Text>Our aim is to help you achieve your goals through our services.</Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div>
                    <h1>HAVING GREAT CREDIT IS MORE IMPORTANT THAN EVER!</h1>
                    <p>We help improve your credit report and increase your credit scores!

                        We are a company with integrity.
                        Consumer and business credit experts.
                        We will be intimately involved with your credit repair experience.
                        We create disputes with the credit bureaus.
                        We're with you every step of the way.
                        We help and guide you from start to finish.</p>
                </div>
                <div>
                    <img src={protocallLogo} alt="Protocall Financial Logo" />
                </div>
            </div>
        </section>
    );
}