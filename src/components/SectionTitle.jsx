import React from 'react';

export default function SectionTitle({children}){
  return (
    <div className="section-heading">
      <p className="eyebrow">Our mission</p>
      <h3>{children}</h3>
    </div>
  );
}
