import React from 'react';

const ImageComponent = () => {
  return (
    <>
      <section className="image-container">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a477e0ef3b4b4696266d8832ab8951696e6cb6f93657f3c97ad7bed80098083d?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" 
          alt="Descriptive image content" 
          className="responsive-image" 
          loading="lazy"
        />
      </section>
      <style jsx>{`
        .image-container {
          display: flex;
          flex-direction: column;
          
        }
        .responsive-image {
          aspect-ratio: 5.32;
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

export default ImageComponent;