import React from 'react';
import SuccessStoryCard from './SuccessStoryCard';

const studentSuccesses = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b15cc278b7aaa46c9573438b67109e27396f3b1a63773e22888f57c2c892e00?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Duy Anh và 7.5 IELTS vượt aim"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bd30d067b30e5a970f562ff6b83d6284a8f38b1f58d86d1d2ef8acc518a4da8?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Học online/offline linh hoạt, Ngọc cán đích 7.0"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/291b9f5eb7663c9d77125f6088d6cbb9b2990625c45a4b81be30cb8fc43e6778?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Hoàng Đức và cú chốt 7.0 IELTS"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2f3596db9089effebc06762d3d7920116b57011ae055f842e586f9386a51e00?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Hạnh Liên và cột mốc 7.0 ở lớp 11"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/34005d937175d37cc52e5a2f7f234e0e08e849e18444588ca01564c185cf07d5?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Minh Triết cán mốc 7.5 IELTS vượt ngoài mong đợi"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6c96b8956ceefaf1c51b3beb302079d3b2cd5ec868a150313928294e8e7f83?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Hoàng Khang thành công xét tuyển đại học nhờ 7.0 IELTS"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6744878d2796bda36127ff4633f9b4df68a3ef39766eefbf13b82a08c513d6b?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Thi IELTS trên máy tính lần đầu, chạm mốc 7.0"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/18c7418af2c8fe4b443d4c709ad44c88680ac461a374d16f0ea84e68e4351b99?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Học lớp thường và 1-1, Giang đạt 7.5"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2c628db1901171571de49f16adda0fcd2862f5e8f85b54117cc35a06cd4984?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "Từ số 3 đến số 7.5, Thu Hương học ra sao?"
  }
];

function StudentSuccessStories() {
  return (
    <section className="success-stories">
      <h2 className="visually-hidden">Student Success Stories</h2>
      <div className="success-stories__grid">
        {studentSuccesses.map((story, index) => (
          <SuccessStoryCard key={index} imageSrc={story.imageSrc} title={story.title} />
        ))}
      </div>
      <style jsx>{`
        .success-stories {
          max-width: 911px;
          margin: auto;
          overflow: hidden;
          margin-top: 70px;
          margin-bottom: 70px;
        }
        .success-stories__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 991px) {
          .success-stories__grid {
            grid-template-columns: 1fr;
          }
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
}

export default StudentSuccessStories;