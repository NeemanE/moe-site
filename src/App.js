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
import HeroCard from './components/HeroCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
      <HeroCard />
      <Services />
      <Pricing />
      <Faq />
    {/*   <Reviews />
      <Contact />
      <Affiliates />
      <Footer /> */}
    </main>
  );
}