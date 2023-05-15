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
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const handleModal1Close = () => setShowModal1(false);
    const handleModal2Close = () => setShowModal2(false);
    const handleModal3Close = () => setShowModal3(false);
    const handleModal4Close = () => setShowModal4(false);
    const handleModal5Close = () => setShowModal5(false);
    const handleModal6Close = () => setShowModal6(false);
    const handleModal1Show = () => setShowModal1(true);
    const handleModal2Show = () => setShowModal2(true);
    const handleModal3Show = () => setShowModal3(true);
    const handleModal4Show = () => setShowModal4(true);
    const handleModal5Show = () => setShowModal5(true);
    const handleModal6Show = () => setShowModal6(true);

    return (
        <div>
            <div>
                <CardGroup className='service-cardgroup1'>
                    <Card onClick={handleModal1Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={businessConsult} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Business Credit</Card.Title>
                        </div>
                    </Card>
                    <Card onClick={handleModal2Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={personalCredit} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Personal Credit Restoration</Card.Title>
                        </div>                </Card>
                    <Card onClick={handleModal3Show}>
                        <Card.Img variant="top" src={businessFormation} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Business formation</Card.Title>
                        </div>                </Card>
                </CardGroup>
            </div>
            <div>
                <CardGroup className='service-cardgroup2'>
                    <Card onClick={handleModal4Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={merchantServices} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Merchant Services</Card.Title>
                        </div>                    </Card>
                    <Card onClick={handleModal5Show} style={{ marginRight: '2vw' }}>
                        <Card.Img variant="top" src={mobileNotary} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Mobile Notary</Card.Title>
                        </div>                    </Card>
                    <Card onClick={handleModal6Show}>
                        <Card.Img variant="top" src={taxPreparation} style={{ height: '100%', objectFit: 'cover' }} />
                        <div style={{ backgroundColor: '#0f3d62', width: '100%', position: 'absolute', bottom: '0' }}>
                            <Card.Title style={{ textAlign: 'center', color: 'white', padding: '0.5rem' }}>Tax Preparation</Card.Title>
                        </div>                    </Card>
                </CardGroup>
            </div>
            <Modal show={showModal1} onHide={handleModal1Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Your business credit can be as important as your personal credit. Creditors and suppliers are increasingly using business credit reports to make lending and credit decisions. Establishing business credit may seem like a daunting process—especially if your business is new. BUT , at Protocall Financial, We Will be with you every step of the way to help you achieve your business Credit Goals.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 1 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleModal2Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>You can legally repair your credit utilizing consumer protections laws such as the Fair Credit Reporting Act, Fair Debt Collection Practices Act, and Much more. Protocall Financial not only works to repair your credit, we provide you the tools you need to educate you for a lifetime of success. Our proven credit repair process will do almost all the work for you while giving you support from start to finish.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 2 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal3} onHide={handleModal3Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Business formation is a necessary early step when starting a business, whether you're registering a simple DBA, incorporating or forming a partnership. The way in which your business is formed will determine the personal liability of the founders, how taxes are paid, and other important details.



                        There are four main types of business structures in the U.S: sole proprietorship, partnership, limited liability and corporation. Each structure has different tax, income and liability implications for businesses owners and their companies.



                        TOP REASONS FOR Business FORMATION :



                        1. Limited Liability For Shareholders
                        2. Raising Capital
                        3. Flexibility of Ownership
                        4. Corporate Deductions
                        5. Asset Protection
                        6. Lower IRS Audit Probability
                        7. Credibility
                        8. Central Management and Corporate Structure
                        9. Fiscal Year / Income Splitting
                        10. Perpetual Duration
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 3 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal4} onHide={handleModal4Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>There are many services out there for you to choose from. Every company has their own pricing and options, but when it comes time to make a decision, you want to get the best option for your business. We want you to choose us TODAY, so give us a call today and allow Protocall Financial to put more money in your pocket by offering you the best Merchant Service rates in the market!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 4 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal5} onHide={handleModal5Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Card 5 Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 5 Modal Body</p>
                </Modal.Body>
            </Modal>
            <Modal show={showModal6} onHide={handleModal6Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Card 6 Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <p>Card 6 Modal Body</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Services;

