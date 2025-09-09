import React from "react";
import "./home.css";
import { Analysis } from "../Analysis/Analysis";
const Home: React.FC = () => {
  return (
    <>
      <main className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Transforming Smiles With Precision & Care
          </h2>
          <p className="hero-description">
            Experience modern dentistry designed for every smile. From routine
            checkups to advanced treatments, we make your dental health simple
            and stress-free.
          </p>
          <a href="#" className="cta-btn">
            Book Appointment →
          </a>
        </div>
        <div className="hero-media">
          <div className="hero-image-container">
            <img
              src="/pexels-karolina-grabowska-6627529.webp"
              alt="Dental Care"
              className="hero-image"
            />
          </div>
        </div>
      </main>
      <Analysis />
    </>
  );
};

export default Home;
