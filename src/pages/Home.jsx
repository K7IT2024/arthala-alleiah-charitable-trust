import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import services from '../data/services';
import YouTubeEmbed from '../components/YouTubeEmbed';
import media from '../data/media';

export default function Home(){
  return (
    <>
      <Hero />

      <section className="section" id="impact">
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

      <section className="section alt" id="services">
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
          <a href="#donate" className="button" onClick={(e) => { e.preventDefault(); window.location.hash = '#donate'; window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 50); }}>Become a donor</a>
        </div>
      </section>
    </>
  );
}
