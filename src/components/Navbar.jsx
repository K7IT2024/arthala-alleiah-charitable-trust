import React from 'react';

const links = [
  { label: 'Home', href: '?page=home' },
  { label: 'About', href: '?page=about' },
  { label: 'Programs', href: '?page=services' },
  { label: 'Events', href: '?page=events' },
  { label: 'Gallery', href: '?page=gallery' },
  { label: 'Donate', href: '?page=donate' },
  { label: 'Volunteer', href: '?page=volunteer' },
  { label: 'Contact', href: '?page=contact' }
];

export default function Navbar({ currentPage = 'home', onNavigate }){
  const handleNavigate = (target) => (event) => {
    event.preventDefault();
    if (onNavigate) onNavigate(target);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/?page=home" className="brand" aria-label="Arthala Alleiah Charitable Trust home" onClick={handleNavigate('home')}>
         <img src="/images/logo-real.png" alt="Arthala Alleiah Charitable Trust logo" />
         <span>Arthala Alleiah Charitable Trust (AACT)</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
         {links.map(link => (
           <a
             key={link.href}
             href={link.href}
             className={currentPage === link.href.replace('?page=', '') ? 'active' : ''}
             onClick={handleNavigate(link.href.replace('?page=', '') || 'home')}
           >
             {link.label}
           </a>
         ))}
        </nav>
      </div>
    </header>
  );
}
