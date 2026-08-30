import React from 'react';

export default function Lightbox({ src, type = 'image', onClose }){
  if (!src) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
        {type === 'video' ? (
          <video controls autoPlay style={{width:'100%', height:'100%'}} src={src} />
        ) : (
          <img src={src} alt="Expanded" />
        )}
      </div>
    </div>
  );
}
