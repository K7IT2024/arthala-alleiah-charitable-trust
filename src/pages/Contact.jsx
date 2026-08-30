
import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Contact(){
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionTitle>Contact Us</SectionTitle>
          <p>
            We welcome volunteers, donors, and partners who want to bring meaningful change to the community. Reach out to learn more about our work, upcoming events, or how you can contribute.
          </p>
          <ul className="contact-list">
            <li><strong>Email:</strong> info@arthalatrust.org</li>
            <li><strong>Phone:</strong> +91 89784 83328</li>
            <li><strong>Address:</strong> Tirupathi</li>
            <li><strong>Hours:</strong> Mon-Sat • 9:00 AM to 6:00 PM</li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/arthalaalleiahcharitabletrust?igsi=MWFqNmM5bmdnYmJ5MQ==" target="_blank" rel="noreferrer">@arthalaalleiahcharitabletrust</a></li>
            <li><strong>YouTube:</strong> <a href="https://youtube.com/@arthalaalleiahcharitabletrust?si=l2EQ-jAB9PLAPtkQ" target="_blank" rel="noreferrer">Arthala Alleiah Charitable Trust channel</a></li>
          </ul>

          <div style={{marginTop:12}}>
            <p><strong>Instagram QR</strong></p>
            <img src="/images/instagram-qr.png" alt="Instagram QR" style={{width:180,borderRadius:8}} />
          </div>
        </div>

        <div className="contact-card">
          <h4>Send a message</h4>
          <form className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <textarea rows="4" placeholder="How would you like to help?" />
            <button type="submit" className="button">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
