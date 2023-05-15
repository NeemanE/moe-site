import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        // main hero section
        <section id="hero" >
            <div className="hero-overlay"></div>
            <div className="hero-background">
                <h1>"ENHANCE YOUR CREDIT & FINANCIAL CREDIBILITY"</h1>
                <p>Ever wanted to improve your credit score? Or do you want to repair your current credit and make it look better? With PROTOCALL FINANCIAL , say goodbye to bad credit!</p>
                <div>
                    <Button>Get your secured card now</Button>
                    <Button>Check your credit now</Button>
                </div>
            </div>

        </section>
    );
}