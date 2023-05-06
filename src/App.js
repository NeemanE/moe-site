import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Affiliates from './components/Affiliates';
import Reviews from './components/Reviews';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Faq />
      <Reviews />
      <Contact />
      <Affiliates />
      <Footer />
    </div>
  );
}