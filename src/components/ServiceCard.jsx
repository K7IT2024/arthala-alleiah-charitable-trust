import React from 'react';

export default function ServiceCard({service}){
  return (
    <article className="service-card" id={service.id}>
      <img src={service.img} alt={service.title} />
      <h4>{service.title}</h4>
      <p>{service.description}</p>
      <a href="#contact" className="text-link">Support this cause</a>
    </article>
  );
}
