import React, { useState } from 'react';
import ShareButtons from './ShareButtons';

// Usage: <YouTubeEmbed videoIds={[...]} channelUrl="https://youtube.com/@..." />
// videoIds may be array of strings or objects {id, caption}
export default function YouTubeEmbed({ videoIds = [], channelUrl, title = 'Arthala Allaiah Charitable Trust' }){
  const [muted, setMuted] = useState(true); // controls first video mute state

  if (Array.isArray(videoIds) && videoIds.length > 0) {
    return (
      <div className="video-grid">
        {videoIds.map((item, idx) => {
          const id = typeof item === 'string' ? item : item.id;
          const caption = typeof item === 'string' ? null : item.caption;
          const isFirst = idx === 0;
          const muteParam = isFirst ? (muted ? '1' : '0') : '0';
          const params = isFirst ? `?autoplay=1&mute=${muteParam}&rel=0` : '?rel=0';
          const src = `https://www.youtube.com/embed/${id}${params}`;
          const absolute = typeof window !== 'undefined' ? `${window.location.origin}/watch/${id}` : `https://youtu.be/${id}`;

          return (
            <div className="video-item" key={id}>
              <iframe
                title={`${title} - ${id}`}
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                allowFullScreen
              />

              {isFirst && muted && (
                <button className="unmute-btn" onClick={() => setMuted(false)} aria-label="Unmute video">Unmute</button>
              )}

              {caption && <div className="video-caption">{caption}</div>}

              <ShareButtons url={absolute} title={caption || title} />
            </div>
          );
        })}
      </div>
    );
  }

  // Fallback: show channel link and subscribe CTA when no videos
  return (
    <div className="video-placeholder">
      <p>Video player will appear here when videos are configured.</p>
      {channelUrl && (
        <p>
          <a href={channelUrl} target="_blank" rel="noreferrer">Visit our YouTube channel</a>
        </p>
      )}
    </div>
  );
}
