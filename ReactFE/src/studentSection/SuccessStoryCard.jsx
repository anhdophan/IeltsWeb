import React from 'react';

function SuccessStoryCard({ imageSrc, title }) {
  return (
    <article className="success-story">
      <img src={imageSrc} alt="" className="success-story__image" />
      <h3 className="success-story__title">{title}</h3>
      <style jsx>{`
        .success-story {
          display: flex;
          flex-direction: column;
        }
        .success-story__image {
          aspect-ratio: 1.49;
          object-fit: contain;
          object-position: center;
          width: 100%;
          flex-grow: 1;
        }
        .success-story__title {
          color: #000;
          font: 700 14px/22.4px "Open Sans", sans-serif;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .success-story__image {
            margin-top: 10px;
          }
        }
      `}</style>
    </article>
  );
}

export default SuccessStoryCard;