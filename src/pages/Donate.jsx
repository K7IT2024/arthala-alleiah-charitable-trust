import React from 'react';
import SectionTitle from '../components/SectionTitle';

const donationStats = [
  { value: '15K+', label: 'Meals served' },
  { value: '1,200+', label: 'Students supported' },
  { value: '40+', label: 'Medical camps' },
  { value: '24/7', label: 'Urgent relief response' }
];

export default function Donate(){
  return (
    <section className="section alt donation-section" id="donate">
      <div className="container donation-shell">
        <div className="donation-banner">
          <div className="donation-banner-copy">
            <p className="eyebrow">Give with purpose</p>
            <h2>Help us build a safer, kinder, and stronger community.</h2>
            <p>
              Your generosity fuels food support, education assistance, healthcare outreach, and emergency relief for families who need it most.
            </p>
          </div>

          <div className="donation-trust-panel">
            <div className="trust-badge">80G Eligible</div>
            <div className="trust-badge">12A Registered</div>
            <div className="trust-badge">Transparent Giving</div>
          </div>
        </div>

        <div className="donation-cta-row">
          <a href="#donation-payment" className="button">Donate Now</a>
          <a href="/docs/AAMTA2662GF20261_80g.pdf" target="_blank" rel="noreferrer" className="button secondary">View Certificates</a>
        </div>

        <div className="donation-header">
          <SectionTitle>Support Our Cause</SectionTitle>
        </div>

        <div className="donation-grid">
          <div className="donation-story">
            <div className="donation-summary-card">
              <p>
                Every donation helps us provide meals, school materials, healthcare support, and emergency relief to families facing hardship across the community.
              </p>
              <p>
                Your support enables us to sustain regular food programs, assist children in education, organize medical camps, and respond quickly to urgent needs with compassion and accountability.
              </p>
            </div>

            <div className="donation-impact-row">
              <span>Trusted by donors</span>
              <span>Community-first</span>
              <span>Accountable giving</span>
            </div>

            <div className="donation-stats-grid">
              {donationStats.map((item) => (
                <div key={item.label} className="donation-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-panel donation-info-panel" id="donation-payment">
            <h4>Donation Channels</h4>
            <ul className="feature-list">
              <li>One-time contribution</li>
              <li>Monthly sponsor support</li>
              <li>Corporate CSR partnerships</li>
              <li>In-kind donations</li>
            </ul>
            <p className="donation-note"><strong>Banking details:</strong> Available on request for verified donors and partners.</p>

            <div className="certificate-badges">
              <a href="/docs/AAMTA2662GF20261_80g.pdf" target="_blank" rel="noreferrer">80G</a>
              <a href="/docs/AAMTA2662GE20251_12a.pdf" target="_blank" rel="noreferrer">12A</a>
              <a href="/docs/ARTHALA_ALLEIAH_CHARITABLE_TRUST.pdf" target="_blank" rel="noreferrer">Trust</a>
            </div>

            <div className="qr-card">
              <h4>Scan & Pay</h4>
              <p>
                Scan the QR code below to support our charitable work through UPI / SBI payment methods.
              </p>
              <img src="/images/donation-scanner.jpg" alt="Donation QR Code" />
              <p className="upi-id">UPI ID: arthalaalleiahcharitabletrust@sbi</p>
            </div>

            <div className="support-areas-block">
              <h4>Support Areas</h4>
              <ul className="feature-list support-list">
                <li>Devotional / Temple / Mosque / Church development & maintenance</li>
                <li>Rural or remote area development and tribal welfare support</li>
                <li>Government school mineral water support and basic facility improvement</li>
                <li>Emergency support for poor, orphans, and crisis situations</li>
                <li>Education & vocational training (Free Java Full-Stack training via K7infoTech since 2013)</li>
              </ul>

              <p>
                We provide skill training in partnership with K7infoTech; each batch typically graduates at least two students free of charge.
              </p>

              <h4>Tax Benefits & Certificates</h4>
              <p>
                Donations are eligible for tax benefits under 80G and 12A. Click to view/download our certificates and trust registration. <strong>Available on request for verification.</strong>
              </p>
              <ul className="doc-links">
                <li><a href="/docs/AAMTA2662GF20261_80g.pdf" target="_blank" rel="noreferrer">Download 80G Certificate (AAMTA2662GF20261)</a></li>
                <li><a href="/docs/AAMTA2662GE20251_12a.pdf" target="_blank" rel="noreferrer">Download 12A Certificate (AAMTA2662GE20251)</a></li>
                <li><a href="/docs/ARTHALA_ALLEIAH_CHARITABLE_TRUST.pdf" target="_blank" rel="noreferrer">Trust Registration/Details</a></li>
              </ul>

              <p>
                For corporate CSR support or detailed banking details for verified donors, please contact us via the Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
