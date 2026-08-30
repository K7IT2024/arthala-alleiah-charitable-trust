import React from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Donate', href: '#donate' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ currentPage = 'home' }){
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Arthala Alleiah Charitable Trust home">
                  <img src="/images/logo-real.png" alt="Arthala Alleiah Charitable Trust logo" />
                  <span>Arthala Alleiah Charitable Trust (AACT)</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={currentPage === link.href.replace('#', '') ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
