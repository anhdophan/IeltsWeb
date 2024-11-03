import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-text">
            <span className="l">L</span>
            <span className="t">T</span>
          </div>
          <div className="logo-subtext">Education</div>
        </div>
        <nav className="nav-menu">
          <div className="nav-items">
            <a href="#" className="nav-item">Giới thiệu</a>
            <a href="#" className="nav-item">Giảng viên</a>
            <a href="#" className="nav-item">Học viên</a>
          </div>
          <a href="#" className="nav-item">Khóa học</a>
        </nav>
        <div className="user-info">
          <div className="user-name">Tên học viên</div>
          <div className="user-avatar"></div>
        </div>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;