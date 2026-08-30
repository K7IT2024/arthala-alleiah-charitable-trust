import React from 'react';
import SectionTitle from '../components/SectionTitle';

const eventList = [
  {
    title: 'Rural & Remote Area Development',
    date: 'Ongoing',
    description: 'Support for rural and tribal communities through welfare outreach, basic facility improvement, and community-centric development initiatives.'
  },
  {
    title: 'Government School Mineral Water Support',
    date: 'As Needed',
    description: 'We support government schools with mineral water access and essential amenities so students can study in healthier environments.'
  },
  {
    title: 'Emergency Relief & Crisis Support',
    date: 'Responsive',
    description: 'Emergency support for poor families, orphans, crisis-affected communities, and help during funerals or unexpected hardships.'
  },
  {
    title: 'Education & Vocational Training',
    date: 'Year-round',
    description: 'Education support and free Java Full-Stack training via K7infoTech since 2013. Each batch typically graduates at least two students free of charge.'
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
