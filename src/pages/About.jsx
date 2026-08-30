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
            <div>
              <h4 style={{marginTop:0}}>Founder: Arthala Kesavelu</h4>
              <p>
                Arthala Kesavelu started the trust in memory of his father, Arthala Alleiah, to serve society with compassion and dignity. What began as a family commitment has grown into regular programs that reach hundreds of people.
              </p>
              <p>
                The trust focuses on practical support — from weekly food distribution to educational assistance and health camps — delivered with respect and community involvement.
              </p>
            </div>
          </div>

          <p>
            Our mission is to create long-term dignity and opportunity by combining immediate relief with sustainable support systems that strengthen the entire community.
          </p>
        </div>

        <div className="info-panel">
          <h4>Our Values</h4>
          <ul className="feature-list">
            <li>Compassion for every life</li>
            <li>Transparency in every action</li>
            <li>Community-first service</li>
            <li>Hope through practical support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
