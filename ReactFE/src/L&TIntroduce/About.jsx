import React from 'react';

const About = () => {
  const stats = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ede7b498385acd91f710df7200c9db4586a4b7ae8b3b7513508967a05f57797?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '7+', label: 'Năm hoạt động' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3ae1d7aae4a216c176ab9bcc79085091375bceacc19a3be742ad92f2cb4c9a54?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '300.000+', label: 'Học viên đã cán đích thành công' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3631220a897325602f4cdd8141ebfcbdf14423a43a9fa56de09287c394143e8a?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '500+', label: 'Giáo viên tài năng' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2197b9c31ab65c88e0111e4c77e882b91223bab58839260e1ef54b72911b7d4f?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '60+', label: 'Cơ sở trên toàn quốc' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b9f595dfcadcff41169d36dfca28c484864928a1498473539da86059cb8d158?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '120.000+', label: 'Học viên online' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2cdef232ad08ff631d9383a0719e7378370521244b20127e874dea8472d7d578?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994', value: '350+', label: 'Đối tác uy tín tin tưởng đồng hành' },
  ];

  return (
    <section className="about" id="about">
      <h2 className="section-title">CÂU CHUYỆN L & T EDUCATION</h2>
      <p className="about-description">
        Từ khát khao lan tỏa tình yêu IELTS tới hành trình 7 năm -
        60+ <br/>cơ sở - chắp cánh cho hàng triệu người chinh phục
        ước mơ...
      </p>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <img src={stat.icon} alt="" className="stat-icon" />
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/565e74c373faf196446d6f52af1c0a5a7bace7e55e63ed2eca2465a3fc612c0c?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="L & T Education team" className="about-image" />
      <style jsx>{`
      .about {
    padding: 4rem 2rem;
    background-color: var(--color-white);
    margin-top: -130px;
  }
  .section-title {
    color: #05224a;
    font-size: 2.5rem;
    margin-left: -350px;
    margin-top: 20px;
  
  }
  .about-description {
    text-align: left;
    max-width: 800px;
    margin: 0 auto 2rem;
    margin-left: 100px;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(3px, 3.5fr));
    column-gap: 0.5rem;
    margin-bottom: 1rem;
    margin-right: 400px;
    padding: 5px;
  }
  
  .stat-item {
    text-align: center;
    padding: 15px;
  }
  
  .stat-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 0.5rem;
  }
  
  .stat-value {
    font-size: 1.2rem;
    font-weight: 750;
    color: #ed1c27;
    margin: 1;
  }
  
  .stat-label {
    font-size: 0.9rem;
    margin: 5;
  }
  
  .about-image {
    max-width: 30%;
    height: auto;
    display: block;
    margin-left: 800px;
    margin-top: -300px;
  }
  .aboutSection {
    margin-top: 66px;
    width: 100%;
    max-width: 1048px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .aboutContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .aboutSection {
      margin-top: 40px;
    }
  
    .aboutContainer {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
      `}</style>
    </section>
    
  );
};

export default About;