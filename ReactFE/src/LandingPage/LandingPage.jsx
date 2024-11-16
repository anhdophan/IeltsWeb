import React from 'react';
import RegistrationForm from 'D:/IeltsWeb/ReactFE/src/teacherSection/RegistrationForm';
import Footer from 'D:/IeltsWeb/ReactFE/src/coursedetails/Footer.jsx';
import Header from '../components/Main Page/Header';
import ImageOverlay from './ImageOverlay';
import CourseDetails from './CourseDetails';
import CourseImage from './CourseImage';
import CoursePromotion from './CoursePromotion';




const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      <main>
        <ImageOverlay/>
        <CourseImage/>
        <CourseDetails/>
        <CoursePromotion/>
        <RegistrationForm />
        <Footer/>
      </main>
      
      <style jsx>{`
      .coursePromotion {
    display: flex;
    gap: 20px;
  }
  
  @media (max-width: 991px) {
    .coursePromotion {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  }
  
  .imageWrapper {
    width: 57%;
  }
  
  @media (max-width: 991px) {
    .imageWrapper {
      width: 100%;
    }
  }
  
  .courseImage {
    aspect-ratio: 1.44;
    object-fit: contain;
    object-position: center;
    width: 100%;
    z-index: 10;
    flex-grow: 1;
    margin: 21px -21px 0 0;
  }
  
  @media (max-width: 991px) {
    .courseImage {
      max-width: 100%;
    }
  }
  
  .detailsWrapper {
    width: 43%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    color: #010101;
    font: 700 18px Roboto, sans-serif;
  }
  
  @media (max-width: 991px) {
    .detailsWrapper {
      width: 100%;
      margin-left: 0;
    }
  }
  
  .courseTitle {
    font-size: 45px;
    line-height: 54px;
    min-height: 163px;
    padding-right: 6px;
  }
  
  @media (max-width: 991px) {
    .courseTitle {
      font-size: 40px;
      line-height: 53px;
      margin-right: 6px;
    }
  }
  
  .separator {
    border-top: 5px solid #f44336;
    width: 107px;
    height: 5px;
    margin-top: 10px;
  }
  
  .courseDescription {
    margin-top: 37px;
    min-height: 58px;
    line-height: 28.8px;
  }
  
  .ctaButton {
    border-radius: 7px;
    background-color: #f44437;
    color: #fff;
    text-align: center;
    line-height: 21.6px;
    padding: 12px 57px 14px;
    font-family: "Open Sans", sans-serif;
    border: none;
    cursor: pointer;
    margin-top: 41px;
    width: 318px;
    max-width: 100%;
    height: 48px;
    box-shadow: 13px 13px 13px 0px rgba(244, 67, 54, 0.3);
  }
  
  @media (max-width: 991px) {
    .ctaButton {
      margin-top: 40px;
      padding: 12px 20px;
    }
  }
      
      .registration-section {
    background-color: #05378e; /* Nền sáng cho phần đăng ký */
    padding: 40px; /* Khoảng cách bên trong */
    border-radius: 8px; /* Bo tròn các góc */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
    width: 100%; /* Chiều ngang bằng 100% */
    max-width: 100vw; /* Đảm bảo không vượt quá chiều rộng viewport */
    margin: 0; /* Loại bỏ margin nếu có */
  }
  
  .section-title {
    font-size: 24px; /* Kích thước chữ cho tiêu đề */
    text-align: center; /* Căn giữa tiêu đề */
    margin-bottom: 10px; /* Khoảng cách dưới tiêu đề */
    color: #fff; /* Màu chữ */
  }
  
  .section-subtitle {
    font-size: 16px; /* Kích thước chữ cho phụ đề */
    text-align: center; /* Căn giữa phụ đề */
    margin-bottom: 20px; /* Khoảng cách dưới phụ đề */
    color: #fff; /* Màu chữ */
  }
  
  .registration-form {
    display: flex; /* Hiển thị dưới dạng flexbox */
    flex-direction: column; /* Xếp dọc các phần tử */
  }
  
  .form-group {
    margin-bottom: 15px; /* Khoảng cách giữa các nhóm biểu mẫu */
    margin-left: 510px;
  }
  
  .form-group label {
    display: block; /* Hiển thị label dưới dạng khối */
    margin-bottom: 5px; /* Khoảng cách dưới label */
    font-size: 14px; /* Kích thước chữ cho label */
    color: #fff; /* Màu chữ cho label */
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select {
    width: 80%; /* Thay đổi chiều rộng ở đây */
    max-width: 300px; /* Giới hạn chiều rộng tối đa (tùy chọn) */
    padding: 10px; /* Khoảng cách bên trong */
    border: 1px solid #000000; /* Viền xung quanh */
    border-radius: 4px; /* Bo tròn các góc */
    font-size: 14px; /* Kích thước chữ */
    color: #000000; /* Màu chữ */
    background-color: white;
  }
  input[type="text"],
  input[type="tel"]
 {
    width: calc(50% - 10px); /* Giảm chiều rộng còn lại 50% - khoảng cách giữa các trường */
    max-width: 150px; /* Giới hạn chiều rộng tối đa */
  }
  
  input[type="text"]:focus,
  input[type="tel"]:focus,
  input[type="email"]:focus,
  select:focus {
    border-color: #000000; /* Màu viền khi được chọn */
    outline: none; /* Loại bỏ outline mặc định */
  }

  input::placeholder {
    color: #000000; /* Màu trắng cho placeholder */
  }
  
  .submit-button {
    background-color: #ed1c25; /* Màu nền cho nút đăng ký */
    color: white; /* Màu chữ cho nút */
    border: none; /* Loại bỏ viền */
    padding: 12px; /* Khoảng cách bên trong */
    font-size: 16px; /* Kích thước chữ cho nút */
    font-weight: bold; /* Chữ đậm cho nút */
    border-radius: 4px; /* Bo tròn các góc */
    cursor: pointer; /* Thay đổi con trỏ khi di chuột qua nút */
    transition: background-color 0.3s; /* Hiệu ứng chuyển màu */
    width: 80%; /* Thay đổi chiều rộng ở đây */
    max-width: 300px; /* Giới hạn chiều rộng tối đa (tùy chọn) */
    display: block;
    margin: 20px auto; 
  }
  
  .submit-button:hover {
    background-color: #b01518; /* Màu nền khi di chuột qua nút */
  }
  
  .countdown {
    margin-top: 30px; /* Khoảng cách trên countdown */
    text-align: center; /* Căn giữa nội dung countdown */
    
  }
  
  .countdown-title {
    font-size: 18px; /* Kích thước chữ cho tiêu đề countdown */
    margin-bottom: 10px; /* Khoảng cách dưới tiêu đề countdown */
    color: #fff; /* Màu chữ cho tiêu đề countdown */
  }
  
  .countdown-timer {
    display: flex; /* Hiển thị dưới dạng flexbox */
    justify-content: center; /* Căn giữa nội dung */
  }
  
  .countdown-item {
    margin: 0 10px; /* Khoảng cách giữa các phần tử countdown */
    text-align: center; /* Căn giữa nội dung trong countdown item */
  }
  
  .countdown-value {
    font-size: 24px; /* Kích thước chữ cho giá trị countdown */
    font-weight: bold; /* Chữ đậm cho giá trị countdown */
    color: #05224a; /* Màu chữ cho giá trị countdown */
    background-color: whitesmoke; /* Màu nền trắng cho countdown-value */
    padding: 10px; /* Khoảng cách bên trong cho countdown-value */
    border-radius: 4px; /* Bo tròn các góc cho countdown-value */
  }
  
  .countdown-label {
    font-size: 14px; /* Kích thước chữ cho nhãn countdown */
    color: whitesmoke; /* Màu chữ cho nhãn countdown */
    display: block; /* Hiển thị nhãn dưới dạng khối */
    margin-top: 5px; /* Khoảng cách trên cho nhãn */
  
  }
     `}</style>
    </div>
  );
};

export default LandingPage;