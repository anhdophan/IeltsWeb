import React from 'react';

function NavItem({ icon, text }) {
  return (
    <div className="nav-item">
      <img src={icon} alt="" className="nav-icon" />
      <span className="nav-text">{text}</span>
      <style jsx>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          color: #000;
          font: 400 1.25rem Poppins, sans-serif;
          white-space: nowrap;
        }
        .nav-icon {
          width: 1.5625rem;
          height: 1.5625rem;
          object-fit: contain;
        }
        .nav-text {
          flex: 1;
        }
        @media (max-width: 991px) {
          .nav-item {
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
}

export default NavItem;