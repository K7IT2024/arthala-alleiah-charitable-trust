import React from 'react';

export default function Hero({ onNavigate }){
  // list of images for community activity strip
  const activityImages = [
    '/images/anna-prasadam.jpg',
    '/images/food-donation.mp4',
    '/images/blood-donation.jpg',
    '/images/books-donation.jpg',
    '/images/eye-checkup.jpg',
    '/images/education.jpg'
  ];

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
          <div className="hero-media-inner">
            <img src="/images/hero.jpg" alt="Community care and charity support" />
            <div className="hero-card">
              <strong>7+ Years</strong>
              <span>of trusted service</span>
            </div>
          </div>

          <div className="community-scroll" aria-hidden="false">
            <div className="scroll-track">
              {activityImages.concat(activityImages).map((src, idx) => (
                <div className="activity-item" key={idx}>
                  {src.endsWith('.mp4') ? (
                    <video src={src} muted loop playsInline />
                  ) : (
                    <img src={src} alt={`activity-${idx}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
