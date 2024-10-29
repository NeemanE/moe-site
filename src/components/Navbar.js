import React, { useState } from "react";
import protocallLogo from "../img/protocall-logo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../App.css";

export default function Navbar() {
    const [showAffiliateModal, setShowAffiliateModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleAffiliateModalClose = () => setShowAffiliateModal(false);
    const handleAffiliateModalShow = () => setShowAffiliateModal(true);

    const handleSignupModalClose = () => setShowSignupModal(false);
    const handleSignupModalShow = () => {
        setShowAffiliateModal(false);
        setShowSignupModal(true);
    };

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
                <a href="https://goodcreditgoodlife.com/">
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
                            onClick={handleAffiliateModalShow}>
                            Affiliate Login
                        </Button>
                    </div>
                </div>
            </div>

            {/* Affiliate Modal */}
            <Modal show={showAffiliateModal} onHide={handleAffiliateModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Affiliate Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="buttonContainer" style={{ display: 'flex', gap: '20px', justifyContent: 'space-evenly' }}>
                        <Button
                            variant="primary"
                            href="https://www.affiliatecreditrepairportal.com/account/login?fbclid=IwAR3ORa-__TREhUVGqQFhWWl1BEcsxwS9xQ-8d82rmz3oyotNe7baU17LB64"
                            target="_blank">
                            Go to Affiliate Login
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleSignupModalShow}>
                            Sign Up to Become an Affiliate
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Signup Modal */}
            <Modal show={showSignupModal} onHide={handleSignupModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Affiliate Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        name="frame_lead"
                        id="frame_lead"
                        src="https://www.clientdisputemanager.com/AffiliateWeb?crepto=241483"
                        height={706}
                        width="100%"
                        frameBorder={0}
                        scrolling="yes"
                        onLoad={() => {
                            const iframe = document.getElementById('frame_lead');
                            if (iframe) {
                                iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
                            }
                        }}
                    />
                </Modal.Body>
            </Modal>
        </section>
    );
}
