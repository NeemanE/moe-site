import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowCircleRight, FaCheck } from "react-icons/fa";
import "../App.css"


export default function Pricing() {
    return (
        <section id="pricing">
            <div className="pricing-container">
                <div className="text-container">
                    <h1>We Make Repairing Your Credit Easy and Affordable!</h1>
                    <h2>Everything you need to improve your credit with 1 low monthly fee and <span className='fancy-underline'>no hidden costs.</span>
                    </h2>
                </div>
                <div className="circle-stack">
                    <div className="circle-container">
                        <div className="price-background">
                            <h1>One Easy Price</h1>
                            <h2>Convenient Low Monthly Payments</h2>
                        </div>
                        <div className="circle circle1">
                            <h3>
                               <span className="price-cost">$349</span> <br /> Enrollment Fee
                            </h3>
                        </div>
                    </div>
                    <div className="circle-container">
                        <div className="circle circle2">
                            <h3><span className="price-cost">$349</span> <br />Monthly</h3>
                        </div>
                        <ul className="price-list">
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> 24/7 Secured Online Portal</li>
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> Unlimited Bureau Disputes</li>
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> In-Depth Credit Audit</li>
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> 1-on-1 Phone Update</li>
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> Expert Advice</li>
                            <li><FaArrowCircleRight style={{color:'#8e8f90'}}/> 90-Day Money Back Guarantee</li>
                        </ul>
                        <Button className="container-button">Get Started Online!</Button>

                    </div>
                </div>
            </div>

            <div className="pricing-container2 price-image">
                <div className="text-container2">
                    <h2>START SEEING RESULTS IN AS LITTLE AS 30 DAYS!</h2>
                </div>
                <div className="results-container">
                    <h2>We Remove Errors Such As:</h2>
                    <ul className="errors-list">
                        <li><FaCheck style={{color:'#3ac0ee'}}/> Collections, Charge-Off's, Repossessions</li>
                        <li><FaCheck style={{color:'#3ac0ee'}}/> Late Payments, Foreclosures, Inquiries</li>
                        <li><FaCheck style={{color:'#3ac0ee'}}/> Personal Information, Bankruptcy's</li>
                        <li><FaCheck style={{color:'#3ac0ee'}}/> Liens, and More!</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
