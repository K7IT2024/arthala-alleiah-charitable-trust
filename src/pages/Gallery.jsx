
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import YouTubeEmbed from '../components/YouTubeEmbed';
import media from '../data/media';
import Lightbox from '../components/Lightbox';

const galleryItems = [
  { title: 'AnnaPrasadam', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80', description: 'Community kitchen and family food support with weekly meal service.' },
  { title: 'Educational Support', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80', description: 'School support, study kits, and mentoring for children in need.' },
  { title: 'Blood Donation', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=900&q=80', description: 'Life-saving blood camps and donor drives for emergency care.' },
  { title: 'Eye Checkups', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80', description: 'Vision screening and health checkup camps for underserved families.' },
  { title: 'Books Donation', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80', description: 'Sharing knowledge through donated books and learning resources.' },
  { title: 'Village Development', img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80', description: 'Clean water systems and community development initiatives for villages.' }
];

export default function Gallery(){
  const [open, setOpen] = useState(null);
  const openImg = (src) => setOpen({ src, type: 'image' });
  const close = () => setOpen(null);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionTitle>Snapshots of Service</SectionTitle>
        <div className="services-grid">
          {galleryItems.map((item) => (
            <article className="service-card" key={item.title} onClick={() => openImg(item.img)} style={{cursor:'pointer'}}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div style={{marginTop:24}}>
          <SectionTitle>Latest Video</SectionTitle>
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

        {open && <Lightbox src={open.src} type={open.type} onClose={close} />}
      </div>
    </section>
  );
}
