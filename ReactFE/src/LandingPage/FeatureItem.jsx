import React from 'react';

const FeatureItem = ({ title, description }) => {
  return (
    <div className="feature-item">
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
      
    </div>
  );
};

export default FeatureItem;