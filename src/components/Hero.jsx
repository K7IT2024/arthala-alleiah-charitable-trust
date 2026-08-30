import React from 'react';

export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Compassion in action</p>
          <h1>Serving the community with care, dignity and hope.</h1>
          <p>
            Arthala Alleiah Charitable Trust is dedicated to giving people access to food, education, healthcare, and a stronger future through community-led service.
          </p>

          <div className="hero-actions">
            <a href="#donate" className="button">Donate Now</a>
            <a href="#contact" className="button secondary">Volunteer</a>
          </div>

          <ul className="quick-facts">
            <li>Community meals</li>
            <li>Education support</li>
            <li>Medical outreach</li>
          </ul>
        </div>

        <div className="hero-media">
          <img src="/images/hero.jpg" alt="Community support and charity event" />
          <div className="hero-card">
            <strong>7+ Years</strong>
            <span>of trusted service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
