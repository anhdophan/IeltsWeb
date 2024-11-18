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
    </footer>
  );
};

export default Footer;
