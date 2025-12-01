// HomePage.jsx
import React from 'react';
import Slideshow from '../pages/Slideshow';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-gray-100">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 style={{ animation: 'slideIn 1s forwards'}}>Early Detection Is Key To Alzheimer's Care</h1>
          <p>Our AI system analyzes brain MRI scans to detect Alzheimer's disease with high precision</p>
          <div className="hero-buttons">
            <a href="/detection" className="btn-secondary">Start Diagnosis</a>
            <a href="/WhatToDo" className="btn-secondary">Learn How It Works</a>
          </div>
        </div>
        <div className="hero-image">
          <Slideshow/>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h2>97%</h2>
          <p>Accuracy Rate</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>
        <div className="stat-card">
          <h2>3-5s</h2>
          <p>Processing Time</p>
        </div>
      </section>

      {/* About Technology Section */}
      <section className="about-tech">
        <div className="tech-content">
          <h2>About Our Technology</h2>
          <p>Our AI combines deep learning algorithms with medical expertise to provide accurate Alzheimer's detection and personalized care recommendations.</p>
          <div className="tech-features">
            <div className="tech-feature">
              <h3>Advanced Image Processing</h3>
              <p>Specialized algorithms for medical scan analysis</p>
            </div>
            <div className="tech-feature">
              <h3>Deep Learning Classification</h3>
              <p>Multiple neural networks identify brain patterns</p>
            </div>
            <div className="tech-feature">
              <h3>Medical Expert Verification</h3>
              <p>Validated by neurologists with decades of experience</p>
            </div>
          </div>
        </div>
        <div className="tech-image">
          <img src="https://files.infinitiresearch.com/wp-content/uploads/2018/02/iStock-493216371-1-1200x900.jpg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Medication Reminders</h3>
            <p>Alerts for pills with dosage & timing.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏥</div>
            <h3>Daily routine scheduling</h3>
            <p>Simple to follow tasks (eat, walk, sleep).</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Photo & name recognition</h3>
            <p>Store faces of family/friends with captions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h3>Personal memory journal</h3>
            <p>Notes, voice memos, photos to preserve memories.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to detect Alzheimer's early?</h2>
        <p>Our AI analyzes brain MRI scans to identify early signs of cognitive decline</p>
        <button className="btn-primary"><a href='/detection'>Start Free Analysis</a></button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BrainScan</h3>
            <p>AI-powered Alzheimer's detection and care recommendation system</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: contact@alzheimercare.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 AlzheimerCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;