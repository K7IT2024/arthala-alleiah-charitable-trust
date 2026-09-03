import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function About(){
  return (
    <section className="section" id="about">
      <div className="container about-layout">
        <div>
          <SectionTitle>About Arthala Alleiah Trust</SectionTitle>

          <div className="about-top">
            <img src="/images/founder.jpg" alt="Founder Arthala Alleiah" className="founder-photo" />
            <div className="founder-intro">
              <h4>Founder: Arthala Kesavelu</h4>
              <p>
                Arthala Kesavelu established the trust in memory of his revered father, Arthala Alleiah, with a sincere belief that service to society is the most lasting form of gratitude. What began as a personal commitment to uplift the vulnerable has grown into a structured and trusted charitable initiative serving people across rural, urban, and underserved communities.
              </p>
              <p>
                Guided by compassion, humility, and practical action, the trust focuses on immediate relief and long-term dignity — from food support and education assistance to emergency aid, healthcare outreach, and community welfare programs that bring visible hope to families in need.
              </p>
            </div>
          </div>

          <div className="about-story">
            <p>
              Arthala Alleiah Charitable Trust was created to address real and recurring needs that often remain outside formal systems of support. The organization believes every person deserves access to food, education, health, and security, regardless of their economic background.
            </p>
            <p>
              Through partnerships, volunteer-driven service, and a transparent approach, the trust works to create a stronger, more compassionate and resilient community. The mission is not only to provide relief, but to restore dignity, confidence, and opportunity for those who need it most.
            </p>
            <p>
              We aim to serve with responsibility, integrity, and hearts rooted in community care — making a steady difference in the lives of children, elders, the poor, the sick, and families facing crisis.
            </p>
          </div>
        </div>

        <div className="info-panel">
          <h4>Our Values</h4>
          <ul className="feature-list">
            <li>Compassion for every life</li>
            <li>Transparency in every action</li>
            <li>Community-first service</li>
            <li>Hope through practical support</li>
            <li>Respect, dignity, and inclusion</li>
            <li>Sustainable support for lasting impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
