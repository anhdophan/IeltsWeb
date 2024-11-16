import React from 'react';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

const timelineData = [
  {
    year: '2017',
    title: 'Thành lập & mở trung tâm',
    description: 'Cơ sở đầu tiên tại 254 Hoàng Văn Thái - Thanh Xuân - Hà Nội',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d9c82d24fcec9855fbf41c5037ecfaae8603dccb9c790c2d63e5c48f43de20c1?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2018',
    title: 'Chia sẻ về IELTS trên Vnexpress',
    description: 'Box học IELTS cùng chuyên trang "Học tiếng Anh" của báo VnExpress',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e37bf6f88ef3c75c4338c597ee43073a1d883d688aa2f942185c3257e6426d51?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2019',
    title: 'Đối tác Bạch Kim của IDP',
    description: 'Chính thức trở thành đối tác BẠCH KIM của IDP vào tháng 9/2018',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7c3f51bb77657d8f58204ca5b0207aeec751d09fa65eb285d8f7cf4cc5b67bf?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2020',
    title: 'Chuyên gia huấn luyện ngôn ngữ',
    description: 'Trở thành Chuyên gia Huấn luyện Ngôn ngữ cho các Startup Việt 2019',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d7870cb86443c90f8d14a1d7675fd278eab05ecdaa7725f0ee1eb4b8b4f2255?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2021',
    title: 'Hợp tác với VTV2, VTV7',
    description: 'Hợp tác cùng VTV7, VTV2 - Tiếng Anh thay đổi cuộc sống',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/de193306c6df75101fe5911ca14cc0f6528281d3fd9b58e7f8289c16a77781b6?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2022',
    title: 'Hợp tác với các trường ĐH lớn',
    description: 'Ký kết hợp tác chiến lược với ĐH Thương Mại, ĐH Đại Nam, ĐH Xây dựng...',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31c7f0c758c090daed63cfbbb7c71ca2647f23c0a89d6f07f7f395432a83b912?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2023',
    title: 'Hợp tác với NXB hàng đầu',
    description: 'Ký kết hợp tác với Nhà xuất bản National Geographic Learning',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb4f26129d45af07a1e67746fd2c81ad24973bbfa787cd7c5fe86e24f773b776?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  },
  {
    year: '2024',
    title: 'Tiếp tục mở mới chi nhánh thứ 62',
    description: 'Sở hữu 60+ cơ sở cùng 300.000+ học viên đồng hành trên toàn quốc',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d51ba18bdc8ea2049601a6d6a28ce3099a95d5c4f0144229332052ff7931294f?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6'
  }
];

function Timeline() {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.visuallyHidden}>Company Timeline</h2>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.year}
          year={item.year}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          isEven={index % 2 === 0}
        />
      ))}
    </section>
  );
}

export default Timeline;