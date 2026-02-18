import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './FAQ.css';

const faqs = [
  {
    question: 'Do carpets dry same-day?',
    answer: 'Yes! In most cases, carpets dry within 4-6 hours after our hot water extraction cleaning process. We use high-powered equipment to remove as much moisture as possible, and good ventilation speeds up the process.',
  },
  {
    question: 'Can you remove emergency water damage?',
    answer: 'Absolutely. We offer emergency water damage restoration services and can respond quickly to extract standing water, dry out your floors and baseboards, and mitigate mold or mildew before it sets in.',
  },
  {
    question: 'Do you serve Silver City?',
    answer: 'Yes, we serve Silver City, NM along with Las Cruces, Deming, Mesilla, Lordsburg, Columbus, Dona Ana, Vado, Radium Springs, El Paso, and Sunland Park.',
  },
  {
    question: "What's your carpet cleaning method?",
    answer: 'We use hot water extraction (steam cleaning), which is the most effective method for deep cleaning carpets. It removes dirt, allergens, and stains from deep within the carpet fibers.',
  },
  {
    question: 'Can you prevent mold growth?',
    answer: 'Yes. As part of our water damage restoration and mold remediation services, we treat surfaces with specialized solutions that inhibit future mold and mildew growth.',
  },
  {
    question: 'Do you clean area rugs?',
    answer: 'Yes, we clean area rugs as part of our furniture and rugs service. Please note that we do not clean oriental rugs or leather furniture.',
  },
  {
    question: 'Can you restore tile shine?',
    answer: 'Absolutely! Our tile and grout cleaning service uses professional-grade scrubbers and cleaners to remove built-up dirt and grime, restoring the original color and shine of your tiles.',
  },
  {
    question: 'Do you service Alamogordo homes?',
    answer: 'Please contact us directly to check availability for Alamogordo. Our primary service areas include Las Cruces, Deming, and surrounding communities.',
  },
  {
    question: 'What furniture can you clean?',
    answer: 'We clean sofas, armchairs, area rugs, curtains, mattresses, and cushions/pillows. We do not clean leather furniture or oriental rugs.',
  },
  {
    question: 'How hot is steam cleaning?',
    answer: 'Hot water extraction uses water heated to around 150-200°F. This temperature is effective at killing bacteria, dust mites, and allergens while loosening deep-set dirt and stains from carpet fibers.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Navbar />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <h1>FAQ</h1>
          <h2>View our frequently asked questions</h2>
          <Link to="/contact" className="faq-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="faq-accordion-section">
        <div className="faq-accordion-inner">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <div className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}>
                  <span>+</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;