import React from 'react';

const Footer = () => {
  const locations = [
    'HÀ NỘI', 'TP. HỒ CHÍ MINH', 'ĐÀ NẴNG', 'HẢI PHÒNG', 'BẮC NINH',
    'THANH HÓA', 'NGHỆ AN', 'HÀ TĨNH', 'KHÁNH HÒA', 'BÌNH DƯƠNG',
    'ĐỒNG NAI', 'VŨNG TÀU'
  ];

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img src="./src/images/Main page/Logo.png" alt=""/>
        </div>

        <div className="footer-description">
          <p>
            L&T Education - trung tâm luyện thi IELTS số 1 Việt Nam. Với sứ mệnh giúp hàng triệu người Việt đạt 6.5-7.0 IELTS, L&T Education nỗ lực mỗi ngày để cùng các bạn học IELTS dễ như ăn bánh, chinh phục được đỉnh cao IELTS!
          </p>
        </div>
        <div className="footer-achievements">
          <p>Đào tạo 70.000 học viên IELTS mỗi năm</p>
          <p>Đối tác Bạch kim của IDP Việt Nam</p>
          <p>Đối tác uy tín lâu năm của VnExpress, Viettel, Panasonic...</p>
        </div>

        <div className="footer-nav">
          <div className="footer-nav-column">
            <h3>Thông tin</h3>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Đội ngũ giảng viên</a></li>
              <li><a href="#">Phương pháp đào tạo</a></li>
              <li><a href="#">Học viên</a></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h3>Khóa học</h3>
            <ul>
              <li><a href="#">Khóa IELTS online</a></li>
              <li><a href="#">Khóa IELTS mất gốc</a></li>
              <li><a href="#">Khóa IELTS cấp tốc</a></li>
              <li><a href="#">Khóa IELTS 1 kèm 1</a></li>
              <li><a href="#">Khóa IELTS 7.0+</a></li>
              <li><a href="#">Khóa IELTS 6.0-6.5</a></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h3>Liên hệ</h3>
            <ul>
              <li><a href="#">Hotline: 0903 411 666</a></li>
              <li><a href="#">Email: chienbinh@l&t-education.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-locations">
          <h3>Hệ thống cơ sở trải dài khắp 3 miền</h3>
          <ul className="location-list">
            {locations.map((location, index) => (
              <li key={index} className="location-item">{location}</li>
            ))}
          </ul>
        </div>

        <div className="social-icons">
          {/* Replace with actual social media links */}
          <a href="#" className="fab fa-facebook"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </div>
      <style jsx>{`
      .main-footer {
     /* Ensure there's no extra space at the top of the footer */
    padding-top: 3rem; /* Adjust padding if needed to maintain space within the footer */
    
    margin-bottom: -20px;
    margin-left:-150px;
}
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 600px;
    max-width: 1200px;
    
  }
  
  .footer-logo {
    display: flex;
    font-family: 'Atomic Age';
    align-items: center;
    margin: 80px;
    height: 200px;
    margin-left: 5px;
    border-color: 1px solid #ed1c25;
    margin-top: -30px;
  }
  
  .logoo {
    font-family: 'Atomic Age';
    font-size: 2.5rem;
    color: #ffffff;
    margin-top: -190px;
    
  }
  
  .logo-text1 {
    font-size: 1.5rem;
    margin-left: 5px;
    color: #ffffff;
    margin-top: -190px;
  }
  
  
  .footer-description {
    max-width: 400px;
    margin-bottom: 5rem;
    margin-top: -95px;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    font-size: small;
  }
  
  .footer-achievements {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
    font-size: 1rem;
    margin-top: -60px;
    font-size: small;
  }
  
  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-left: 475px;
    margin-top: -290px;
    font-size: small;
  }
  
  .footer-nav-column h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .footer-nav-column ul {
    list-style: none;
    padding: 0;
    
  }
  
  .footer-nav-column a {
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;
    transition: color 0.3s;
    
  }
  
  .footer-nav-column a:hover {
    color: #ffcb04;
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .social-icons a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #ffcb04;
  }
  
  .footer-locations {
    margin-top: 2rem;
    margin-left: -890px;
  }
  
  .location-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
    justify-content: center;
    margin-left: 850px;
  }
  
  .location-item {
    background: linear-gradient(180deg, #fdfbfb 0%, #eaedee 100%);
    color: #ed1c25;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
     `}</style>
    </footer>
    
  );
};

export default Footer;
