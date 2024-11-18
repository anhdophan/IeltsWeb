import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { icon: 'dashboard.svg', label: 'Dashboard', active: true },
    { icon: 'my-course.svg', label: 'My course' },
    { icon: 'more.svg', label: 'More' }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
              <img src="https://cdn-icons-png.flaticon.com/128/17916/17916638.png" alt="" className="sidebar-icon" />
              <span className="sidebar-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="icon.box">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50939abb0a5b6d03956fa8d1d6dce409ea5246461060abf8dadf6b308dc796fa?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="" className="sidebar-footer-icon" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
