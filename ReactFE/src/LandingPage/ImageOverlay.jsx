import React from 'react';

const ImageOverlay = () => {
  return (
    <section className="image-overlay">
      <div className="overlay-content">
        <div className="image-container" aria-label="Decorative image"></div>
      </div>
      <style jsx>{`
        .image-overlay {
          display: flex;
          flex-direction: column;
          margin-bottom: 200px;
        }
        .overlay-content {
          background: var(--color-red-5010, rgba(255, 1, 1, 0.1));
          display: flex;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          padding: 148px 80px;
        }
        .image-container {
          display: flex;
          margin-bottom: -30px;
          width: 1290px;
          max-width: 120%;
          height: 302px;
          
        }
        @media (max-width: 991px) {
          .overlay-content {
            max-width: 100%;
            padding: 100px 20px;
          }
          .image-container {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageOverlay;