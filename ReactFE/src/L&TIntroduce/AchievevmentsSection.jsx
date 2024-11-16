import React from 'react';
import AchievementCard from './AchievementCard';

const achievementsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c644bdacf19702198f673d3e1e526ee1b1a3e6913bbfb0a7e3104c906b30e9e5?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Hành trình 7 năm hoạt động"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/694c7cd0671ae3a15e67525d3426d63b83228a836e2ff033a8c64c7c0af6d833?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Đối tác bạch kim của IDP Việt Nam"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/04e2fafc920ed8eeebfef70c6915498a25f3863efe24d0f7b474604ee7c237a4?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Khai trương phòng thi IELTS trên máy chuẩn IDP"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8dc23646b946523673ae60e57c8ba9963fd92918bd8fd6bfb8afce49809f707?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Kênh youtube 1000+ video bài giảng"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dbe7ca004320713121044d3402d856fdb89d66210aae2e671dcd27d7475e049?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Website l&t-education.com 1.000.000 lượt truy cập mỗi tháng"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4641505f1de48684a59a444b0b4d8b5cda056468ee623a4c64d49e0fcd0ab2d1?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    text: "Fanpage 1.000.000 người theo dõi"
  }
];

const AchievementsSection = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-row">
          {achievementsData.slice(0, 3).map((achievement, index) => (
            <div key={index} className={`achievement-column ${index === 1 ? 'achievement-column-wide' : ''}`}>
              <AchievementCard imageSrc={achievement.imageSrc} text={achievement.text} />
            </div>
          ))}
        </div>
        <div className="achievements-row">
          {achievementsData.slice(3).map((achievement, index) => (
            <div key={index} className="achievement-column">
              <AchievementCard imageSrc={achievement.imageSrc} text={achievement.text} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .achievements-section {
        max-width: 958px;
        padding-bottom: 24px;
        }

        .achievements-container {
        width: 100%;
        }

        .achievements-row {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        }

        .achievement-column {
        flex: 1;
        }

        .achievement-column-wide {
        flex: 1;
        
        }

        .achievement-card {
        display: flex;
        flex-direction: column;
        color: #242424;
        font: 700 15px/24px "Open Sans", sans-serif;
        }

        .achievement-image {
        width: 100%;
        aspect-ratio: 1.78;
        object-fit: contain;
        object-position: center;
        }

        .achievement-text {
        margin-top: 12px;
        min-height: 24px;
        }

        @media (max-width: 991px) {
        .achievements-section {
            max-width: 100%;
        }

        .achievements-row {
            flex-direction: column;
        }

        .achievement-column,
        .achievement-column-wide {
            width: 100%;
            margin-top: 14px;
        }

        .achievement-text {
            margin-left: 10px;
        }
      
      `}</style>
    </section>
  );
};

export default AchievementsSection;