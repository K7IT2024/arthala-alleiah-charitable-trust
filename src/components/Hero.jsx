import React, { useEffect, useState } from 'react';

const heroImages = [
  { src: '/images/hero-1.jpg', alt: 'Community leader portrait' },
  { src: '/images/hero-2.jpg', alt: 'Trust founders portrait' },
  { src: '/images/community-care-founder.jpg', alt: 'Community support leader portrait' }
];

export default function Hero({ onNavigate }){
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (nextIndex) => setActiveIndex((nextIndex + heroImages.length) % heroImages.length);

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
            <a href="?page=contact" className="button secondary" onClick={(event) => { event.preventDefault(); if (onNavigate) onNavigate('volunteer'); }}>Volunteer with us</a>
          </div>

          <ul className="quick-facts">
            <li>Community meals</li>
            <li>Education support</li>
            <li>Medical outreach</li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-panel">
            <div className="hero-slide-wrap">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={index === activeIndex ? 'hero-slide active' : 'hero-slide'}
                />
              ))}
            </div>

            <div className="hero-slider-dots" aria-label="Slide indicators">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={index === activeIndex ? 'hero-dot active' : 'hero-dot'}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
