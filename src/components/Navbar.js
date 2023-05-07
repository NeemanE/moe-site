import React from "react";
import { Container } from "react-bootstrap/";
import protocallLogo from "../img/protocall-logo.png"
import Button from "react-bootstrap/Button";
import "../App.css"

export default function Navbar() {
    return (
        <section className="navbar">
            <div className="">
                <a href="https://protocallfinancial.com/"><img src={protocallLogo} alt="Protocall Financial Logo" /></a>
            </div>
            <div className="navDirect">
                <ul className="navList">
                    <li><a href="https://protocallfinancial.com/">Home</a></li>
                    <li><a href="https://protocallfinancial.com/services">Services</a></li>
                    <li><a href="https://protocallfinancial.com/pricing">Pricing</a></li>
                    <li><a href="https://protocallfinancial.com/faq">FAQ</a></li>
                    <li><a href="https://protocallfinancial.com/contact">Contact</a></li>
                    <li><a href="https://protocallfinancial.com/affiliates">Affiliates</a></li>
                </ul>
            </div>
            <div className="">
                <Button variant="primary rounded-0" size="md" href="https://www.creditrestorationportal.com/account/login?fbclid=IwAR3ORa-__TREhUVGqQFhWWl1BEcsxwS9xQ-8d82rmz3oyotNe7baU17LB64">Client Login</Button>
            </div>
            <div className="">
                <Button variant="primary rounded-0" size="md" href="https://www.affiliatecreditrepairportal.com/account/login?fbclid=IwAR3ORa-__TREhUVGqQFhWWl1BEcsxwS9xQ-8d82rmz3oyotNe7baU17LB64">Affiliate Login</Button>
            </div>
        </section>
    );
}