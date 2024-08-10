// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to FutureGuard Life Insurance</h1>
          <p>Your trusted partner in securing your family's future.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Flexible Plans</h3>
            <p>Our plans are designed to be flexible, so you can choose the coverage that best fits your needs and budget.</p>
          </div>
          <div className="feature">
            <h3>Affordable Rates</h3>
            <p>We offer competitive rates to ensure that you get the best value for your money without compromising on coverage.</p>
          </div>
          <div className="feature">
            <h3>Easy Application Process</h3>
            <p>Apply online in minutes with our simple and hassle-free application process.</p>
          </div>
          <div className="feature">
            <h3>24/7 Customer Support</h3>
            <p>Our dedicated support team is available round the clock to assist you with any questions or concerns.</p>
          </div>
          <div className="feature">
            <h3>Guaranteed Coverage Options</h3>
            <p>Get peace of mind with our guaranteed coverage options, ensuring your family is protected no matter what.</p>
          </div>
          <div className="feature">
            <h3>Expert Advice</h3>
            <p>Receive personalized advice from our experienced insurance consultants to help you make informed decisions.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"FutureGuard Life Insurance Portal provided excellent service and helped me choose the right plan for my family. Highly recommend!"</p>
            <p>- Kishore</p>
          </div>
          <div className="testimonial">
            <p>"The application process was so easy and quick. I feel secure knowing my family is protected."</p>
            <p>- Kiran Raj</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What is life insurance?</h3>
          <p>Life insurance is a contract between you and an insurance company, where you pay premiums in exchange for a sum of money paid to your beneficiaries upon your death.</p>
        </div>
        <div className="faq">
          <h3>Why do I need life insurance?</h3>
          <p>Life insurance provides financial security for your loved ones, covering expenses such as funeral costs, debts, and ongoing living expenses.</p>
        </div>
        <div className="faq">
          <h3>How do I choose the right plan?</h3>
          <p>Consider factors like your financial obligations, income replacement needs, and future goals. Our expert advisors can help you choose the best plan for your situation.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 [Your Life Insurance Portal Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
