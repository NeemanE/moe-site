import React, { useState } from 'react';
import { Card, CardGroup, Modal } from 'react-bootstrap';
import businessConsult from '../img/business-consult.jpg';
import personalCredit from '../img/personal-credit.jpg';
import businessFormation from '../img/business-formation.jpg';
import merchantServices from '../img/merchant-services.jpg';
import mobileNotary from '../img/mobile-notary.jpg';
import taxPreparation from '../img/tax-preparation.jpg';

const Services = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const handleModal1Close = () => setShowModal1(false);
    const handleModal2Close = () => setShowModal2(false);
    const handleModal1Show = () => setShowModal1(true);
    const handleModal2Show = () => setShowModal2(true);

    return (
        <div>
            <div>
            <CardGroup>
                <Card onClick={handleModal1Show} style={{ marginRight: '2vw' }}>
                    <Card.Img variant="top" src={businessConsult} style={{ height: '100%', objectFit: 'cover' }} />
                    <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                        <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 1</Card.Title>
                    </div>
                </Card>
                <Card onClick={handleModal2Show} style={{ marginRight: '2vw' }}>
                    <Card.Img variant="top" src={personalCredit} style={{ height: '100%', objectFit: 'cover' }} />
                    <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                        <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 2</Card.Title>
                    </div>                </Card>
                <Card onClick={handleModal1Show}>
                    <Card.Img variant="top" src={businessFormation} style={{ height: '100%', objectFit: 'cover' }} />
                    <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                        <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 3</Card.Title>
                    </div>                </Card>
            </CardGroup>
            </div>
            <div>
                <CardGroup>
                    <Card onClick={handleModal1Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={merchantServices} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 4</Card.Title>
                        </div>                    </Card>
                    <Card onClick={handleModal2Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={mobileNotary} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 5</Card.Title>
                        </div>                    </Card>
                    <Card onClick={handleModal1Show}>
                        <Card.Img variant="top" src={taxPreparation} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: 'navy', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Card 6</Card.Title>
                        </div>                    </Card>
                </CardGroup>
            </div>
            <Modal show={showModal1} onHide={handleModal1Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Card 1 Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 1 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleModal2Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Card 2 Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 2 Modal Body</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Services;

