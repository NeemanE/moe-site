import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardGroup, Modal } from "react-bootstrap";
import businessConsult from "../img/business-consult.jpg";
import personalCredit from "../img/personal-credit.jpg";
import businessFormation from "../img/business-formation.jpg";
import merchantServices from "../img/merchant-services.jpg";
import mobileNotary from "../img/mobile-notary.jpg";
import taxPreparation from "../img/tax-preparation.jpg";
import marketing from "../img/marketing.jpg";
import webDesign from "../img/web-design.jpg";
import autoInsurance from "../img/auto-accident.jpg";

import "../App.css";

const Services = () => {
  const navigate = useNavigate();

  const handleOpenCreditPage = () => {
    navigate("/credit");
  };
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const handleModal1Close = () => setShowModal1(false);
  const handleModal2Close = () => setShowModal2(false);
  const handleModal3Close = () => setShowModal3(false);
  const handleModal4Close = () => setShowModal4(false);
  const handleModal5Close = () => setShowModal5(false);
  const handleModal6Close = () => setShowModal6(false);
  const handleModal7Close = () => setShowModal7(false);
  const handleModal8Close = () => setShowModal8(false);
  const handleModal9Close = () => setShowModal9(false);
  const handleModal1Show = () => setShowModal1(true);
  const handleModal2Show = () => {
    window.open("/credit", "_blank");
  };
  const handleModal3Show = () => setShowModal3(true);
  const handleModal4Show = () => setShowModal4(true);
  const handleModal5Show = () => setShowModal5(true);
  const handleModal6Show = () => setShowModal6(true);
  const handleModal7Show = () => setShowModal7(true);
  const handleModal8Show = () => setShowModal8(true);
  const handleModal9Show = () => setShowModal9(true);

  return (
    <div id="services">
      <div>
        <h1 className="service-title">Our Services</h1>
        <p className="service-text">
          We offer a wide range of services to help you achieve your goals.
          Whether you are looking to start a business, or improve your personal
          credit, we have the tools you need to succeed.{" "}
          <span>Click below</span> to find out more information about what we
          can provide for you!
        </p>
      </div>
      <div>
        <CardGroup className="service-cardgroup1">
          <Card
            className="service-card"
            onClick={handleModal1Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={businessConsult}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Business Credit
              </Card.Title>
            </div>
          </Card>
          <Card
            className="service-card"
            onClick={handleModal2Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={personalCredit}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Personal Credit Restoration
              </Card.Title>
            </div>{" "}
          </Card>
          <Card className="service-card" onClick={handleModal3Show}>
            <Card.Img
              variant="top"
              src={businessFormation}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Business Formation
              </Card.Title>
            </div>{" "}
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup className="service-cardgroup2">
          <Card
            className="service-card"
            onClick={handleModal4Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={merchantServices}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Merchant Services
              </Card.Title>
            </div>{" "}
          </Card>
          <Card
            className="service-card"
            onClick={handleModal5Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={mobileNotary}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Mobile Notary
              </Card.Title>
            </div>{" "}
          </Card>
          <Card className="service-card" onClick={handleModal6Show}>
            <Card.Img
              variant="top"
              src={taxPreparation}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Tax Preparation
              </Card.Title>
            </div>{" "}
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup className="service-cardgroup3">
          <Card
            className="service-card"
            onClick={handleModal7Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={marketing}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Business Promotional Products
              </Card.Title>
            </div>
          </Card>
          <Card
            className="service-card"
            onClick={handleModal8Show}
            style={{ marginRight: "2vw" }}
          >
            <Card.Img
              variant="top"
              src={webDesign}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Web Design/Domain Hosting
              </Card.Title>
            </div>{" "}
          </Card>
          <Card className="service-card" onClick={handleModal9Show}>
            <Card.Img
              variant="top"
              src={autoInsurance}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "#0f3d62",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                Auto Insurance (Coming Soon)
              </Card.Title>
            </div>{" "}
          </Card>
        </CardGroup>
      </div>
      <Modal show={showModal1} onHide={handleModal1Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Business Credit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your business credit can be as important as your personal credit.
            Creditors and suppliers are increasingly using business credit
            reports to make lending and credit decisions. Establishing business
            credit may seem like a daunting process—especially if your business
            is new. BUT, at Protocall Financial, We Will be with you every step
            of the way to help you achieve your business Credit Goals.
          </p>
        </Modal.Body>
      </Modal>
      {/* <Modal show={showModal2} onHide={handleModal2Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Personal Credit Restoration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You can legally repair your credit utilizing consumer protections
            laws such as the Fair Credit Reporting Act, Fair Debt Collection
            Practices Act, and Much more. Protocall Financial not only works to
            repair your credit, we provide you the tools you need to educate you
            for a lifetime of success. Our proven credit repair process will do
            almost all the work for you while giving you support from start to
            finish.
          </p>
        </Modal.Body>
      </Modal> */}
      <Modal show={showModal3} onHide={handleModal3Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Business Formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Business formation is a necessary early step when starting a
            business, whether you're registering a simple DBA, incorporating or
            forming a partnership. The way in which your business is formed will
            determine the personal liability of the founders, how taxes are
            paid, and other important details.
          </p>

          <p>
            There are four main types of business structures in the U.S: sole
            proprietorship, partnership, limited liability and corporation. Each
            structure has different tax, income and liability implications for
            businesses owners and their companies.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Top Reasons for Business Formation :
            </span>
            <br />
            1. Limited Liability For Shareholders
            <br />
            2. Raising Capital
            <br />
            3. Flexibility of Ownership
            <br />
            4. Corporate Deductions
            <br />
            5. Asset Protection
            <br />
            6. Lower IRS Audit Probability
            <br />
            7. Credibility
            <br />
            8. Central Management and Corporate Structure
            <br />
            9. Fiscal Year / Income Splitting
            <br />
            10. Perpetual Duration
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showModal4} onHide={handleModal4Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Merchant Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            There are many services out there for you to choose from. Every
            company has their own pricing and options, but when it comes time to
            make a decision, you want to get the best option for your business.
            We want you to choose us TODAY, so give us a call today and allow
            Protocall Financial to put more money in your pocket by offering you
            the best Merchant Service rates in the market!
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showModal5} onHide={handleModal5Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mobile Notary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Need a document notarized but don't want the hassle of finding one?
            Just give us a call! We offer notary services directly to you, any
            part of town, any time of day.
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showModal6} onHide={handleModal6Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tax Preparation Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Specializing in Individual and Small Business/LLC returns, we make
            tax season easy for you, and your wallet! Just bring us your
            documents and let us handle the rest.{" "}
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showModal7} onHide={handleModal7Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Business Promotional Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Introducing our Business Promotional Products Service!</p>
          <p>
            Are you looking for innovative ways to promote your business and
            make a lasting impression on your target audience? Look no further!
            Our Business Promotional Products Service offers a wide range of
            customizable items that will help you elevate your brand and
            captivate potential customers.
          </p>
          <p>
            With our service, you can choose from an extensive selection of
            high-quality promotional products that are tailored to suit your
            business needs. From branded apparel and accessories to tech gadgets
            and office supplies, we have the perfect items to showcase your
            brand with style and professionalism.
          </p>
        </Modal.Body>
      </Modal>
      <Modal show={showModal8} onHide={handleModal8Close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Web Design/Domain Hosting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Need a website? Everyone does to succeed in their business! Let us
            build you your perfect website suited for your business and your
            needs, with no headaches. All of our websites come with domains, so
            your site is ready to launch whenever you are.
          </p>
        </Modal.Body>
      </Modal>
      <Modal /* show={showModal9} onHide={handleModal9Close} */ centered>
        {" "}
        {/* Commented out until the service is ready for launch with description */}
        <Modal.Header closeButton>
          <Modal.Title>Auto Insurance (Coming Soon)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>placeholder</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;
