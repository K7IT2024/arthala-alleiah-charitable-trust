import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import services from '../data/services';
import YouTubeEmbed from '../components/YouTubeEmbed';
import media from '../data/media';

export default function Home({ onNavigate }){
  const focusAreas = [
    { title: 'Health Care', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80' },
    { title: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80' },
    { title: 'Disaster Response & Relief', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80' },
    { title: 'Community Support', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80' }
  ];

  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section className="focus-band">
        <div className="container">
          <div className="section-heading focus-heading">
            <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Our Missions</p>
            <h3>Building a stronger, kinder community</h3>
          </div>
          <div className="focus-grid">
            {focusAreas.map(item => (
              <div key={item.title} className="focus-tile">
                <img src={item.image} alt={item.title} />
                <div className="focus-overlay"><strong>{item.title}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="container">
          <SectionTitle>Our Impact</SectionTitle>
          <div className="metrics-grid">
            <div className="metric"><strong>15K+</strong><span>Meals served</span></div>
            <div className="metric"><strong>1200+</strong><span>Students supported</span></div>
            <div className="metric"><strong>350+</strong><span>Blood donors mobilized</span></div>
            <div className="metric"><strong>40+</strong><span>Free health camps</span></div>
          </div>
        </div>
      </section>

      <section className="section alt programs-section" id="services">
        <div className="container">
          <SectionTitle>Our Programs</SectionTitle>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="media">
        <div className="container">
          <SectionTitle>Media & Videos</SectionTitle>
          <YouTubeEmbed videoIds={media.videos} channelUrl={media.channelUrl} />

          {media.localVideos && media.localVideos.length > 0 && (
            <div style={{marginTop:18}}>
              <SectionTitle>Local Videos</SectionTitle>
              <div className="video-grid">
                {media.localVideos.map(v => (
                  <div className="video-item" key={v.src}>
                    <video controls src={v.src} style={{width:'100%', borderRadius:12}} />
                    {v.caption && <div className="video-caption">{v.caption}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="donate">
        <div className="container donate-panel">
          <div>
            <p className="eyebrow">Join the mission</p>
            <h3>Give hope to families in need</h3>
            <p>
              Your contributions help us provide meals, scholarships, medical camps, and support for children and elders across our community.
            </p>
          </div>
          <a href="?page=donate" className="button" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('donate'); }}>Become a donor</a>
        </div>
      </section>
    </>
  );
}
