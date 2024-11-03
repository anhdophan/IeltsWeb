import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <a href="#" className="menu-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/103b74f03025fc5f1b4100bb53d4b60af540d8986e00f22f3b62b9327fe00f2e?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Dashboard" className="menu-icon" />
          <span className="menu-text">Dashboard</span>
        </a>
        <a href="#" className="menu-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f3801a2461e52bfd722c03bd363630a2f16e83022817841b053f2ad56adcbb?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="My Course" className="menu-icon" />
          <span className="menu-text">My course</span>
        </a>
        <a href="#" className="menu-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e0f40779561a18608bdd1d714e40496c357251bac697e60754509cfe3a4b7f?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="More" className="menu-icon" />
          <span className="menu-text">More</span>
        </a>
      </nav>
      <div className="user-profile">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50939abb0a5b6d03956fa8d1d6dce409ea5246461060abf8dadf6b308dc796fa?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Profile" className="profile-icon" />
      </div>
    </aside>
  );
};

export default Sidebar;