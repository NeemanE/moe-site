import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import protocallLogo from "../img/protocall-logo.png";
import art1 from "../img/card-art1.png";
import art2 from "../img/card-art2.png";
import art3 from "../img/card-art3.png";
import "../App.css"

export default function HeroCard() {
    return (
        <section>
            <div className="creditworthy">
                <h1>Become Creditworthy</h1>
            </div>
            <div>
                <CardGroup className="hero-cardgroup">
                    <Card className="hero-card">
                        <Card.Body>
                            <Card.Title><img src={art1} /><br />24/7 Online Support </Card.Title>
                            <Card.Text>Follow your dispute status online with your own personal portal.</Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className="hero-card">
                        <Card.Body>
                            <Card.Title><img src={art2} /><br />Personalized Attention</Card.Title>
                            <Card.Text>We will keep you informed throughout the entire process</Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className="hero-card">
                        <Card.Body>
                            <Card.Title><img src={art3} /><br />Super Fast Results! </Card.Title>
                            <Card.Text>Our aim is to help you achieve your goals through our services.</Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>

            <div className="hero-container">
  <div className="hero-text">
    <h1>HAVING GREAT CREDIT IS MORE IMPORTANT THAN EVER!</h1>
    <p>
      We help improve your credit report and increase your credit scores!
      We are a company with integrity.
      Consumer and business credit experts.
      We will be intimately involved with your credit repair experience.
      We create disputes with the credit bureaus.
      We're with you every step of the way.
      We help and guide you from start to finish.
    </p>
  </div>
  <div className="hero-logo">
    <img src={protocallLogo} alt="Protocall Financial Logo" />
  </div>
</div>
        </section>
    );
}