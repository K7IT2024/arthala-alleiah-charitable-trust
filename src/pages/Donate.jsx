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
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <h4>Scan & Pay</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              Scan the QR code below to support our charitable work through UPI / SBI payment methods.
            </p>
            <img 
              src="/images/donation-scanner.jpg" 
              alt="Donation QR Code" 
              style={{ 
                maxWidth: '420px', 
                width: '100%', 
                border: '2px solid #d4a574',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#fff'
              }} 
            />
            <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
              UPI ID: arthalaalleiahcharitabletrust@sbi
            </p>
          </div>

          <div style={{ marginTop: '26px' }}>
            <h4>Support Areas</h4>
            <ul className="feature-list" style={{ marginTop: 8 }}>
              <li>Devotional / Temple / Mosque / Church development & maintenance</li>
              <li>Rural or remote area development and tribal welfare support</li>
              <li>Government school mineral water support and basic facility improvement</li>
              <li>Emergency support for poor, orphans, and crisis situations</li>
              <li>Education & vocational training (Free Java Full-Stack training via K7infoTech since 2013)</li>
            </ul>

            <p style={{ marginTop: 12, color: 'var(--muted)' }}>
              We provide skill training in partnership with K7infoTech; each batch typically graduates at least two students free of charge.
            </p>

            <h4 style={{ marginTop: 18 }}>Tax Benefits & Certificates</h4>
            <p style={{ color: 'var(--muted)' }}>
              Donations are eligible for tax benefits under 80G and 12A. Click to view/download our certificates and trust registration. <strong>Available on request for verification.</strong>
            </p>
            <ul style={{ marginTop: 8 }}>
              <li><a href="/docs/AAMTA2662GF20261_80g.pdf" target="_blank" rel="noreferrer">Download 80G Certificate (AAMTA2662GF20261)</a></li>
              <li><a href="/docs/AAMTA2662GE20251_12a.pdf" target="_blank" rel="noreferrer">Download 12A Certificate (AAMTA2662GE20251)</a></li>
              <li><a href="/docs/ARTHALA_ALLEIAH_CHARITABLE_TRUST.pdf" target="_blank" rel="noreferrer">Trust Registration/Details</a></li>
            </ul>

            <p style={{ marginTop: 14, color: 'var(--muted)' }}>
              For corporate CSR support or detailed banking details for verified donors, please contact us via the Contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
