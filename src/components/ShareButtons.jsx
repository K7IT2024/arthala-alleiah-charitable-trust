import React from 'react';

export default function ShareButtons({ url, title = '' }){
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title || 'Check this video');
  const wa = `https://wa.me/?text=${text}%20${encoded}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
  const tw = `https://twitter.com/intent/tweet?text=${text}&url=${encoded}`;

  const copy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    } else {
      prompt('Copy this link', url);
    }
  };

  return (
    <div className="share-links">
      <a href={wa} target="_blank" rel="noreferrer" className="share-btn">WhatsApp</a>
      <a href={fb} target="_blank" rel="noreferrer" className="share-btn">Facebook</a>
      <a href={tw} target="_blank" rel="noreferrer" className="share-btn">Twitter</a>
      <button onClick={copy} className="share-btn">Copy link</button>
    </div>
  );
}
