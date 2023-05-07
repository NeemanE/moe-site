import React from "react";
import { Button } from "react-bootstrap";

export default function Pricing() {

    return (
        <section id="pricing">
            <div>
                <div>
                    <h1>We Make Repairing Your Credit Easy and Affordable!</h1>
                    <h2>Everything you need to improve your credit with 1 low monthly fee and  no hidden costs.</h2>
                </div>
                <div className="circle-container">
                    <h1>One Easy Price</h1>
                    <h2>Convenient Low Monthly Payments</h2>
                    <div className="circle">
                        <h3>$349 <br /> Enrollment Fee</h3>
                    </div>
                </div>
                <div className="circle-container">
                    <ul className="price-list">
                        <li>24/7 Secured Online Portal</li>
                        <li>Unlimited Bureau Disputes</li>
                        <li>In-Depth Credit Audit</li>
                        <li>1-on-1 Phone Update</li>
                        <li>Expert Advice</li>
                        <li>90-Day Money Back Guarantee</li>
                    </ul>
                    <Button>Get Started Online!</Button>
                    <div className="circle">
                        <h3>$349 Monthly</h3>
                    </div>
                </div>
            </div>

            {/* Add background image from moe site to this when styling */}

            <div>
                <div>
                    <h2>START SEEING RESULTS IN AS LITTLE AS 30 DAYS! 30 DAYS!</h2>
                </div>
                <div> 
                    <h2>We Remove Errors Such As:</h2>
                    <ul className="errors-list">
                        <li>Collections, Charge-Off's, Repossessions</li>
                        <li>Late Payments, Foreclosures, Inquiries</li>
                        <li>Personal Information, Bankruptcy's</li>
                        <li>Liens, and More!</li>
                    </ul>
                </div>
            </div>

        </section>
    );

}