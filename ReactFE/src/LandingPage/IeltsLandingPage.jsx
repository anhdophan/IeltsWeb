import React from 'react';
import FeatureColumn from './FeatureColumn';
import ImageColumn from './ImageColumn';

const IeltsLandingPage = () => {
  const features = [
    {
      title: "MUỐN ĐẠT 6.5 IELTS NHƯNG...",
      description: "Không ngữ pháp - Không từ vựng\nKhông nghe - Không nói được",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96747a82bdd5ded3a8af9f38b86c4bbe24d97e21fa9f1e3d042796c16223a8d5",
    },
    {
      title: "KHÔNG BIẾT BẮT ĐẦU TỪ ĐÂU...",
      description: "Hoang mang không biết mất gốc học\nnhư thế nào? bắt đầu từ đâu...",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f58686b7fd81da1bf277dc4a40be4375b3994d1e0d1510fc457744fbafbc83",
    },
    {
      title: "HỌC MÃI KHÔNG LÊN...",
      description:
        "Không phương pháp, định hướng phù\nhợp, khiến bạn đã đi học rất nhiều nơi\nmà vẫn dậm chân tại chỗ.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96747a82bdd5ded3a8af9f38b86c4bbe24d97e21fa9f1e3d042796c16223a8d5",
    },
    {
      title: "KHÔNG CÓ LỘ TRÌNH...",
      description:
        "Chưa tìm được lộ trình học phù hợp, lo\nlắng học phí và ti tỉ điều khác khi học,\nsợ không được hỗ trợ đầy đủ.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f58686b7fd81da1bf277dc4a40be4375b3994d1e0d1510fc457744fbafbc83",
    },
  ];

  return (
    <main className="ielts-landing">
      <div className="content-wrapper">
        {/* Left Column: Text Content */}
        <div className="features-wrapper">
          <h2 className="main-title">Nếu bạn đang...</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="image-column">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f42c47f38544e51dd0f1bef6c808ca2c54ad5a789801a248241d54b361da542"
            alt="Student thinking"
            className="feature-image"
          />
        </div>
        </div>
        
      </div>
    </main>
  );
};

export default IeltsLandingPage;