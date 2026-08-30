import React from 'react';

export default function ServiceCard({service}){
  return (
    <article className="service-card" id={service.id}>
      <img src={service.img} alt={service.title} />
      <h4>{service.title}</h4>
      <p>{service.description}</p>
      <a href="?page=contact" className="text-link" onClick={(event) => { event.preventDefault(); if (window && window.history) { const url = new URL(window.location.href); url.searchParams.set('page', 'contact'); window.history.pushState({}, '', `${url.pathname}${url.search}`); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } }}>Support this cause</a>
    </article>
  );
}
