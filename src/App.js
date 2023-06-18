import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Affiliates from "./components/Affiliates";
import Credit from "./components/Credit";
import Reviews from "./components/Reviews";
import HeroCard from "./components/HeroCard";
import "bootstrap/dist/css/bootstrap.min.css";
import privacyPolicyData from "./privacyPolicy.json";
import termsOfUseData from "./termsOfUse.json";
import returnPolicyData from "./returnPolicy.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/credit" element={<Credit />} />
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <HeroCard />
              <Services />
              <Pricing />
              <Faq />
              <Reviews />
              <Contact />
              <Footer
                privacyPolicyData={privacyPolicyData}
                termsOfUseData={termsOfUseData}
              />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}
