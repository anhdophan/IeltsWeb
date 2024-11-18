import React from 'react';

const ImageComponent = () => {
  return (
    <>
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c70f4997946e083c988c99aacd3e8b3d0d3978a46d1268442217f23550b602?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6"
          alt="Descriptive image content"
          className="responsive-image"
          loading="lazy"
        />
      </section>
      <style jsx>{`
        .image-container {
          display: flex;
          flex-direction: column;
          margin-top:-490px;
          
         
        }
        .responsive-image {
          aspect-ratio: 4.26;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .responsive-image {
            width: 600%;
          }
        }
      `}</style>
    </>
  );
};

export default ImageComponent;