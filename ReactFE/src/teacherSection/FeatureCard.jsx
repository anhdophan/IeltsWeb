import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <img src={icon} alt="" className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <style jsx>{`
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30%;
          margin-bottom: 20px;
        }
        .feature-icon {
          width: 80px;
          height: 73px;
          object-fit: contain;
          margin-bottom: 7px;
        }
        .feature-title {
          color: #000;
          text-align: center;
          font: 700 16px/25.6px "Open Sans", sans-serif;
          margin-bottom: 7px;
        }
        .feature-description {
          border-radius: 10px;
          border: 1px solid #000;
          background-color: #fff;
          box-shadow: 0 15px 20px -15px #000;
          padding: 14px 10px;
          color: #000;
          font: 400 15px/24px "Open Sans", sans-serif;
        }
        @media (max-width: 991px) {
          .feature-card {
            width: 100%;
            max-width: 400px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </article>
  );
}

export default FeatureCard;