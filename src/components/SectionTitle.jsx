import React from 'react';

export default function SectionTitle({ children, eyebrow }){
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{children}</h3>
    </div>
  );
}
