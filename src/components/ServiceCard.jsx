import React from 'react';

export default function ServiceCard({service}){
  return (
    <article className="service-card" id={service.id}>
      <img src={service.img} alt={service.title} />
      <h4>{service.title}</h4>
      <p>{service.description}</p>
      <a href="#contact" className="text-link" onClick={(event) => { event.preventDefault(); if (window && window.history) { window.history.pushState(null, '', `${window.location.pathname}${window.location.search}#contact`); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } }}>Support this cause</a>
    </article>
  );
}
