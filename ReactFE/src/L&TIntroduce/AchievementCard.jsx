import React from 'react';

const AchievementCard = ({ imageSrc, text }) => {
  return (
    <article className="achievement-card">
      <img src={imageSrc} alt="" className="achievement-image" />
      <p className="achievement-text">{text}</p>
    </article>
  );
};

export default AchievementCard;