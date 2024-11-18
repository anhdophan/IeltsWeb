import React from 'react';

const ImageContainer = () => {
  return (
    <>
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d17f72d968337e9e387be5ee10b735bc2ed0bbba96ae70f4c77f18f0dede7a3?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6"
          alt="Descriptive image content"
          className="responsive-image"
          loading="lazy"
        />
      </section>
      <style jsx>{`
        .image-container {
          display: flex;
          max-width: 974px;
          flex-direction: column;
          overflow: hidden;
        }
        .responsive-image {
          aspect-ratio: 3.44;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .responsive-image {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ImageContainer;