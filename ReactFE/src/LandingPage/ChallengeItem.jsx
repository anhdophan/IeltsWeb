
import React from 'react';

const ChallengeItem = ({ icon, text }) => {
  return (
    <div className="challenge-item">
      <img src={icon} alt="" className="challenge-icon" />
      <p className="challenge-text">{text}</p>
      <style jsx>{`
        .challenge-item {
          display: flex;
          flex-direction: column;
          flex: 1;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        .challenge-icon {
          aspect-ratio: 1.08;
          object-fit: contain;
          object-position: center;
          width: 54px;
        }
        .challenge-text {
          margin-top: 13px;
          height: 20px;
          padding-bottom: 1px;
          text-transform: uppercase;
          font: 700 16px/19.2px var(--font-family-Font-1, "Open Sans");
        }
      `}</style>
    </div>
  );
};

export default ChallengeItem;