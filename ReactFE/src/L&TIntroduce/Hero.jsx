import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b1544b202a06cd84f296f50be7f507ebd0ede76129936f18639320b6e00ce6?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994"
        alt="L & T Education campus"
      />
      <h1 className="hero-title">Chào mừng bạn đến với L & T EDUCATION!</h1>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-description">
            Trước khi chúng ta có cơ hội gặp gỡ, cảm ơn bạn đã sẵn <br/>lòng tìm hiểu tại đây.
            Đội ngũ L&T Education rất vui được cùng bạn <br/>chia sẻ những câu chuyện đằng sau
            thương hiệu đáng tự hào.
          </p>
          <p className="hero-description">
            <strong>L & T Education - Chiến binh IELTS</strong> là thương hiệu trực thuộc<br/> Công ty Cổ phần
            Giáo dục và Đào tạo <strong>IMAP Việt Nam</strong> - <br/> đơn vị đi đầu trong lĩnh vực đào tạo tiếng
            Anh tại Việt Nam.
          </p>
          <p className="hero-description">
          Trải qua gần <strong>8 năm</strong> thành lập và phát triển, L&T Education tự hào <br/>được hàng
          trăm nghìn học viên tin tưởng lựa chọn đồng hành tại <br/>hơn <strong>60 cơ sở</strong> luyện thi
          trên toàn quốc cũng như hệ thống <br/>học trực tuyến.
        </p>
        <p className="hero-description">
          L & T Education sở hữu đội ngũ <strong>500+ giáo viên</strong> chuyên môn cao,<br/> nghiệp vụ giỏi,
          với kinh nghiệm giảng dạy nhiều năm và tinh thần nhiệt <br/> huyết trong nghề. Các
          giáo viên tại đã truyền cảm hứng, động lực cho <br/><strong>300.000+ học viên</strong> L & T Education
          cán đích IELTS thành công với tỷ lệ <br/>đạt/vượt band IELTS cam kết lên đến 94%.
        </p>
        <p className="hero-description">
        Bên cạnh 60+ cơ sở luyện thi IELTS toàn quốc, L & T Education <br/>hiện cũng đang sở
        hữu hệ sinh thái học tập ONLINE: website, fanpage,<br/> group hỗ trợ học tập hoàn
        toàn miễn phí giúp các bạn học viên có thể <br/>tự ôn luyện tại nhà.
        </p>
        </div>
        
        <img
          className="hero-image1"
          src="https://www.luyenthiielts9.com/wp-content/uploads/2019/01/dn-1.png"
          alt="L & T Education campus"
        />
      </div>
      <style jsx>{`
        .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    background-color: rgba(217, 235, 255, 0.2);
    text-align: center;
    width: 120%;
  }
  
  .hero-image {
    max-width: 105%;
    height: auto;
    margin-top: -94px;
  }
  
  .hero-title {
    font-size: 2.5rem;
    color: #05224a;
    margin-top: 1rem;
    margin-left: -330px;
  }
  
  .hero-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin-top: 2rem;
    text-align: left;
  }
  
  .hero-text {
    flex: 1;
    padding-right: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    margin-left: 20px;
  }
  
  .hero-image1 {
    flex: 0.5;
    max-width: 45%;
    height: auto;
    border-radius: 500%;
    margin-top: 100px;
  }
      `}</style>
    </section>
  );
};

export default Hero;
