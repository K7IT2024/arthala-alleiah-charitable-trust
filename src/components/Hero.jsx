import React from 'react';

export default function Hero({ onNavigate }){
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">Helping communities thrive with dignity</div>
          <p className="eyebrow">Compassion in action</p>
          <h1>Serving the community with care, dignity and hope.</h1>
          <p>
            Arthala Alleiah Charitable Trust is dedicated to giving people access to food, education, healthcare, and a stronger future through community-led service.
          </p>

          <div className="hero-actions">
            <a href="?page=donate" className="button" onClick={(event) => { event.preventDefault(); if (onNavigate) onNavigate('donate'); }}>Donate Now</a>
            <a href="?page=contact" className="button secondary" onClick={(event) => { event.preventDefault(); if (onNavigate) onNavigate('contact'); }}>Volunteer</a>
          </div>

          <ul className="quick-facts">
            <li>Community meals</li>
            <li>Education support</li>
            <li>Medical outreach</li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Community care and volunteering"
              className="hero-panel-image"
            />
            <div className="dot-grid">
              <span /><span /><span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="panel-label">Community Care</div>
          </div>
          <div className="hero-mini-card">
            <strong>7+ Years</strong>
            <span>of trusted service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
