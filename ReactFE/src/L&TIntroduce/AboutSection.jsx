import React from 'react';
import InfoCard from './InfoCard';
import styles from './AboutSection.module.css';

const aboutData = [
  {
    title: 'Hành trình thắp lửa chiến binh',
    description: 'Chúng tôi đã, đang và mãi đam mê, cống hiến hết mình vì sứ mệnh chắp cánh ước mơ IELTS cho hàng triệu người Việt Nam vươn tầm thế giới. Hệ thống 60+ cơ sở học IELTS Online/ Offline là cầu nối giúp các bạn học viên trên mọi miền tổ quốc cùng nỗ lực chinh phục IELTS.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aaa4d8f339bc040604e88ee39a01a563c994d5c4096dcbfdf9c7b2d8b1aa5596?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6',
    imageAlt: 'Hành trình thắp lửa chiến binh'
  },
  {
    title: 'Đồng hành theo đuổi ước mơ',
    description: 'Đội ngũ giáo viên tài năng, nhưng không hướng tới trở thành "thần tượng" của học trò mà dành tâm huyết để "biến học trò trở thành thần tượng của chính mình". Mỗi giây mỗi phút thầy cô L & T Education luôn nỗ lực sáng tạo, mang tới những giờ giảng chất lượng nhất cho các bạn học viên.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e522feff11404dc952ba869d9dcf64ccf3851003ddcf5d5eed714ea71d4a38c7?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6',
    imageAlt: 'Đồng hành theo đuổi ước mơ'
  },
  {
    title: 'Học IELTS toàn diện, bứt phá',
    description: 'Phương pháp đào tạo RIPL đề cao tính trải nghiệm, sự tương tác, thực hành ngôn ngữ liên tục giữa thầy và trò, giúp hơn 300.000 học viên chinh phục tiếng Anh bằng con đường ngắn nhất và tràn đầy cảm hứng, tự tin',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51272893516ad655c705075bca0c3640962905c179ad27a91069e7c8b6642710?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6',
    imageAlt: 'Học IELTS toàn diện, bứt phá'
  }
];

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <header className={styles.aboutHeader}>
        <h2 className={styles.aboutTitle}>Về L & T Education</h2>
        <h2 className={styles.aboutTitle}>Về giáo viên</h2>
        <h2 className={styles.aboutTitle}>Về phương pháp đào tạo</h2>
        
    
      </header>
      <div className={styles.cardContainer}>
        {aboutData.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;