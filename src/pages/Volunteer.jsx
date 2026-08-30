import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Volunteer(){
  return (
    <section className="section" id="volunteer">
      <div className="container contact-grid">
        <div>
          <SectionTitle>Volunteer With Us</SectionTitle>
          <p>
            We are always looking for kind-hearted volunteers who can help with food drives, school mentoring, events, fundraising, and community outreach. Your time and effort can directly change the lives of families and children who need support.
          </p>
          <ul className="contact-list">
            <li>Food packing and community meal service</li>
            <li>School support and mentoring for children</li>
            <li>Healthcare camp coordination and outreach</li>
            <li>Fundraising and event logistics support</li>
          </ul>
        </div>

        <div className="contact-card">
          <h4>Ready to serve?</h4>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="4" placeholder="Tell us how you would like to contribute" />
            <button type="submit" className="button">Join as volunteer</button>
          </form>
        </div>
      </div>
    </section>
  );
}
