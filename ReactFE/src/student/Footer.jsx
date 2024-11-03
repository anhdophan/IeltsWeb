import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-text">
                  <span className="l">L</span>
                  <span className="t">T</span>
                </div>
                <div className="footer-logo-subtext">Education</div>
              </div>
            </div>
            <div className="footer-info">
              <h3 className="footer-info-text">Thông tin</h3>
            </div>
            <div className="footer-description">
              <div className="description-row">
                <div className="description-column">
                  <div className="description-content">
                    <p className="description-paragraph">
                      L&T Education - trung tâm luyện thi IELTS
                      số 1 Việt Nam. Với sứ mệnh giúp hàng
                      triệu người Việt đạt 6.5-7.0 IELTS, L&T Education
                      nỗ lực mỗi ngày để cùng các bạn
                      học IELTS dễ như ăn bánh, chinh phục
                      được đỉnh cao IELTS!
                    </p>
                    <ul className="description-list">
                      <li>Đào tạo 70.000 học viên IELTS mỗi năm</li>
                      <li>Đối tác Bạch kim của IDP Việt Nam</li>
                      <li>Đối tác uy tín lâu năm của VnExpress, Viettel, Panasonic...</li>
                    </ul>
                  </div>
                </div>
                <div className="footer-links-column">
                  <nav className="footer-links">
                    <a href="#" className="footer-link">Giới thiệu</a>
                    <a href="#" className="footer-link">Đội ngũ giảng viên</a>
                    <a href="#" className="footer-link">Phương pháp đào tạo</a>
                    <a href="#" className="footer-link">Học viên</a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="footer-locations">
              <h3>Hệ thống cơ sở trải dài khắp 3 miền</h3>
            </div>
          </div>
          <div className="footer-courses-column">
            <div className="footer-courses">
              <h3 className="courses-header">Khóa học</h3>
              <nav className="courses-list">
                <a href="#" className="course-link">Khóa IELTS online</a>
                <a href="#" className="course-link">Khóa IELTS mất gốc</a>
                <a href="#" className="course-link">Khóa IELTS cấp tốc</a>
                <a href="#" className="course-link">Khóa IELTS 1 kèm 1</a>
                <a href="#" className="course-link">Khóa IELTS 7.0+</a>
                <a href="#" className="course-link">Khóa IELTS 6.0-6.5</a>
                <a href="#" className="course-link">Khóa IELTS 5.0-5.5</a>
              </nav>
            </div>
          </div>
          <div className="footer-contact-column">
            <div className="footer-contact">
              <h3 className="contact-header">Liên hệ</h3>
              <div className="contact-info">
                <p>
                  <span>Hotline: </span>
                  <a href="tel:0903411666" className="contact-link">0903 411 666</a>
                </p>
                <p>
                  <span>Email: </span>
                  <a href="mailto:chienbinh@l&t-education.com" className="contact-link">chienbinh@l&t-education.com</a>
                </p>
              </div>
              <div className="social-icons">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/809f75a4ad35765c25bcbbbf570e9c29cfd3a61505a8260c7f9f8a549737c9dc?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Social icon" className="social-icon" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a2e829adba3b53bc3ad4c8829e9e6e6628809a037a9e634ff3a3e116578c7a?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Social icon" className="social-icon" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a00c62d8ff792aa1dd1eeed260fc57a8753d27e31d2b27932c4876a87fc814?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Social icon" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="location-grid">
          <div className="location-column">
            <div className="location-item">
              <div className="location-name">
                <span className="location-text">HÀ NỘI</span>
              </div>
            </div>
            <div className="location-item">
              <div className="location-name">
                <span className="location-text">THANH HÓA</span>
              </div>
            </div>
          </div>
          {/* More location columns would be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;