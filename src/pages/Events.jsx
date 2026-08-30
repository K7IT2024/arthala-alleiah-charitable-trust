import React from 'react';
import SectionTitle from '../components/SectionTitle';

const eventList = [
  {
    title: 'Weekly Food Distribution',
    date: 'Every Saturday',
    description: 'Community meal service every Saturday providing nutritious meals to families and individuals in need.'
  },
  {
    title: 'Back-to-School Support',
    date: 'June & July',
    description: 'Book kits, uniforms, and educational essentials distributed to students from low-income households.'
  },
  {
    title: 'Health Camp & Blood Drive',
    date: 'Quarterly',
    description: 'Community wellness sessions including eye screening, blood donation, and health counseling.'
  },
  {
    title: 'Festival Care Initiative',
    date: 'Festival Seasons',
    description: 'Special support during major festivals to help families celebrate with dignity and access to essentials.'
  }
];

export default function Events(){
  return (
    <section className="section alt" id="events">
      <div className="container">
        <SectionTitle>Community Events</SectionTitle>
        <div className="service-detail-grid">
          {eventList.map((event, index) => (
            <article className="detail-card" key={event.title}>
              <div className="detail-icon">{index + 1}</div>
              <div>
                <h4>{event.title}</h4>
                <p><strong>{event.date}</strong></p>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
