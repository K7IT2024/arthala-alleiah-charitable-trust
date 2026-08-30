import React from 'react';
import SectionTitle from '../components/SectionTitle';

const serviceHighlights = [
  {
    title: 'AnnaPrasadam',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: 'Daily and festival meal services that provide nourishment to the underprivileged and support family well-being through regular community feeding.'
  },
  {
    title: 'Education Support',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    description: 'Scholarships, study kits, school materials, and mentoring for children who need help continuing their education with dignity.'
  },
  {
    title: 'Blood Donation Drives',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=900&q=80',
    description: 'Regular blood donation camps and awareness initiatives in partnership with medical institutions to save lives in emergencies.'
  },
  {
    title: 'Eye Checkup Camps',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
    description: 'Vision screening and referral support for people in underserved communities, helping detect and address preventable eye problems.'
  },
  {
    title: 'Books Donation',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    description: 'Collecting and distributing books to schools, libraries, and learners so access to knowledge grows across marginalized communities.'
  },
  {
    title: 'Village Development',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
    description: 'Community development initiatives focused on clean water access, sanitation, and village upliftment for long-term social impact.'
  }
];

export default function Services(){
  return (
    <section className="section alt" id="services">
      <div className="container">
        <SectionTitle>How We Help</SectionTitle>
        <div className="service-detail-grid">
          {serviceHighlights.map((service, index) => (
            <article className="detail-card" key={service.title}>
              <img src={service.img} alt={service.title} style={{width:110,height:80,objectFit:'cover',borderRadius:8,marginRight:12}} />
              <div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
