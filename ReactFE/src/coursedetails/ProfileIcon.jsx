import React from 'react';

function ProfileIcon() {
  return (
    <div >
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50939abb0a5b6d03956fa8d1d6dce409ea5246461060abf8dadf6b308dc796fa?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" alt="Profile" className="profile-image" />
      <style jsx>{`
        .profile-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 6.25rem;
          height: 6.25rem;
          background-color: #fff;
          border: 2px solid #ff0808;
        }
        .profile-image {
          width: 2.375rem;
          height: 2.375rem;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

export default ProfileIcon;