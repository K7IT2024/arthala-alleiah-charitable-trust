import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import services from '../data/services';
import YouTubeEmbed from '../components/YouTubeEmbed';
import media from '../data/media';

export default function Home({ onNavigate }){
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section className="section mission-band">
        <div className="container mission-grid">
          <div className="mission-card primary">
            <span className="mission-kicker">Our Mission</span>
            <h3>To uplift lives through dignity, care and lasting support.</h3>
          </div>
          <div className="mission-card">
            <span className="mission-kicker">Vision</span>
            <p>To create a compassionate, healthier, and more empowered society where every individual has access to support, opportunity, and hope.</p>
          </div>
          <div className="mission-card">
            <span className="mission-kicker">Values</span>
            <p>Transparent service, accountability, inclusivity, and community-led action rooted in compassion.</p>
          </div>
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="container">
          <SectionTitle>Our Impact</SectionTitle>
          <div className="metrics-grid">
            <div className="metric">
              <strong>15K+</strong>
              <span>Meals served</span>
            </div>
            <div className="metric">
              <strong>1200+</strong>
              <span>Students supported</span>
            </div>
            <div className="metric">
              <strong>350+</strong>
              <span>Blood donors mobilized</span>
            </div>
            <div className="metric">
              <strong>40+</strong>
              <span>Free health camps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-band">
        <div className="container">
          <h3 className="focus-title">Our Focus Areas</h3>
          <div className="focus-grid">
            {services.map(s => (
              <a key={s.id} className="focus-tile" href={`?page=services#${s.id}`} onClick={(e)=>{ e.preventDefault(); if (onNavigate) onNavigate('services'); }}>
                <img src={s.img} alt={s.title} />
                <div className="focus-overlay"><strong>{s.title}</strong></div>
              </a>
            ))}
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
