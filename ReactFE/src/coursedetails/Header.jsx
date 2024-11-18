import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
      
          <img src="./src/images/Main page/Group 248.png" alt=""/>
        
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li><a href="#introduction">Giới thiệu</a></li>
          <li><a href="#instructors">Giảng viên</a></li>
          <li><a href="#students">Học viên</a></li>
          <li><a href="#courses">Khóa học</a></li>
        </ul>
      </nav>
      <div className="user-info">
        <span className="user-name">Tên học viên</span>
        <div className="user-avatar"></div>
      </div>
    </header>
  );
};

export default Header;