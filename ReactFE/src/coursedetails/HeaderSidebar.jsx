import React from 'react';
import NavItem from './NavItem';
import ProfileIcon from './ProfileIcon';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfca63583e493f4de4e1cab96adadf1945696b92528ce0c68380f40f24b86360?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", text: "Dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53f3801a2461e52bfd722c03bd363630a2f16e83022817841b053f2ad56adcbb?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", text: "My course" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c780725a5ac06569621e6dc9dbbc7698603140a280737da239544edfddeafd64?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6", text: "More" }
];

function HeaderSidebar() {
  return (
    <header className="header">
      <nav className="navigation">
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} text={item.text} />
        ))}
      </nav>
      <ProfileIcon />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 1rem;
          border: 2px solid #ff0000;
          margin-top: 100px;
          width: 100.5%;
          margin-bottom: -200px;
          margin-left:-3px;
        }
        .navigation {
          display: flex;
          gap: 1.25rem;
        }
        @media (max-width: 991px) {
          .header {
            padding: 1rem 1.25rem;
          }
        }
      `}</style>
    </header>
  );
}

export default HeaderSidebar;