import React from 'react';

const ImageContainer = () => {
  return (
    <>
      <section className="image-section">
        <div className="image-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7dfb04b1b9895778c6d45e24b3646a5b935400443ba60ff7ad3a74a6b83f3e?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6"
            className="background-image"
            alt="Background image"
          />
          <div className="overlay-image" role="img" aria-label="Overlay image"></div>
        </div>
      </section>
      <style jsx>{`
        .image-section {
          display: flex;
          flex-direction: column;
        }
        .image-wrapper {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 638px;
          width: 100%;
          overflow: hidden;
          align-items: center;
          padding: 8px 80px 0;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .overlay-image {
          position: relative;
          display: flex;
          width: 1315px;
          max-width: 100%;
          height: 630px;
        }
        @media (max-width: 991px) {
          .image-wrapper {
            max-width: 100%;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ImageContainer;