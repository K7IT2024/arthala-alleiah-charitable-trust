import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Donate(){
  return (
    <section className="section alt" id="donate">
      <div className="container about-layout">
        <div>
          <SectionTitle>Support Our Cause</SectionTitle>
          <p>
            Every donation helps us provide meals, school materials, healthcare support, and emergency relief to families facing hardship across the community.
          </p>
          <p>
            Your support enables us to sustain regular food programs, assist children in education, organize medical camps, and respond quickly to urgent needs with compassion and accountability.
          </p>
        </div>

        <div className="info-panel">
          <h4>Donation Channels</h4>
          <ul className="feature-list">
            <li>One-time contribution</li>
            <li>Monthly sponsor support</li>
            <li>Corporate CSR partnerships</li>
            <li>In-kind donations</li>
          </ul>
          <p className="donation-note"><strong>Banking details:</strong> Available on request for verified donors and partners.</p>
        </div>
      </div>
    </section>
  );
}
