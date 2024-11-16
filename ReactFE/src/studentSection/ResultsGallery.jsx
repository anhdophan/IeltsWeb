import React from 'react';

const ResultsGallery = ({ testimonials }) => {
  return (
    <section className="results-gallery">
      {testimonials.map((testimonial, index) => (
        <img
          key={index}
          src={testimonial.imageSrc}
          alt={testimonial.alt}
          className="gallery-image"
        />
      ))}
      <style jsx>{`
        .results-gallery {
          display: flex;
          justify-content: space-between;
          margin-top: -3250px;
          position: absolute;
          margin-right: -503px;
        }
        .gallery-image {
          width: 200px;
          height: auto;
          
        }
        @media (max-width: 991px) {
          .results-gallery {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ResultsGallery;