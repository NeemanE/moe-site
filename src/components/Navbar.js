import React from "react";
import protocallLogo from "../img/protocall-logo.png";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function Navbar() {
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="navbar">
            <div>
                <a href="goodcreditgoodlife.com/">
                    <img src={protocallLogo} alt="Protocall Financial Logo" />
                </a>
            </div>
            <div className="navDirect">
                <ul className="navList">
                    <li>
                        <a href="#home" onClick={(e) => scrollToSection("home", e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => scrollToSection("services", e)}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={(e) => scrollToSection("pricing", e)}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#faq" onClick={(e) => scrollToSection("faq", e)}>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navLogin">
                <div className="buttonContainer">
                    <div>
                        <Button
                            className="login-button"
                            variant="primary rounded-0"
                            size=""
                            href="https://www.creditrestorationportal.com/account/login?fbclid=IwAR3ORa-__TREhUVGqQFhWWl1BEcsxwS9xQ-8d82rmz3oyotNe7baU17LB64"
                            target="_blank">
                            Client Login
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="primary rounded-0"
                            href="https://www.affiliatecreditrepairportal.com/account/login?fbclid=IwAR3ORa-__TREhUVGqQFhWWl1BEcsxwS9xQ-8d82rmz3oyotNe7baU17LB64"
                            target="_blank">
                            Affiliate Login
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}