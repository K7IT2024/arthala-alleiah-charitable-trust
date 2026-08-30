import React from 'react';

export default function Footer({ onNavigate }){
  const handleNavigate = (target) => (event) => {
    event.preventDefault();
    if (onNavigate) onNavigate(target);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Arthala Alleiah Charitable Trust</h4>
          <p>Serving families with food, education, care, and community support.</p>
        </div>

        <div>
          <h5>Quick links</h5>
          <ul>
            <li><a href="?page=about" onClick={handleNavigate('about')}>About</a></li>
            <li><a href="?page=services" onClick={handleNavigate('services')}>Programs</a></li>
            <li><a href="?page=events" onClick={handleNavigate('events')}>Events</a></li>
            <li><a href="?page=contact" onClick={handleNavigate('contact')}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul>
            <li>info@arthalatrust.org</li>
            <li>+91 89784 83328</li>
            <li>Tirupathi</li>
            <li><a href="https://www.instagram.com/arthalaalleiahcharitabletrust?igsi=MWFqNmM5bmdnYmJ5MQ==" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://youtube.com/@arthalaalleiahcharitabletrust?si=l2EQ-jAB9PLAPtkQ" target="_blank" rel="noreferrer">YouTube channel</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Arthala Alleiah Charitable Trust. All rights reserved.</p>
      </div>
    </footer>
  );
}
