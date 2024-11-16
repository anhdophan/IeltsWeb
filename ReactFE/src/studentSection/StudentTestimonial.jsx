import React from 'react';

const StudentTestimonial = () => {
  return (
    <article className="student-testimonial">
      <div className="testimonial-content">
        <p>
          Mỗi học viên cầm trên tay tấm bằng IELTS đều là một đại sứ mang theo niềm
          tự hào và niềm tin cháy bỏng của L & T Education, đồng thời cũng là động lực lớn
          lao để đội ngũ <span className="highlight">L & T Education</span> không ngừng tiến bước. Cảm ơn các bạn đã lựa
          chọn <span className="highlight">L & T Education</span> là người đồng hành trên hành trình chinh phục IELTS.
        </p>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f04606fd98cd30a087ecaf9cade9b4f9b9c71f8ff6425ebbc4928300c24cbe?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" alt="Quotation mark" className="quote-mark" />
      </div>
      <style jsx>{`
        .student-testimonial {
          background-color: #fff;
          padding: 30px 8px 0;
          width: 600px;
          max-width: 100%;
          margin-top: 116px;
        }
        .testimonial-content {
          position: relative;
          font-size: 16px;
          line-height: 25.6px;
          color: #000;
        }
        .highlight {
          font-weight: bold;
        }
        .quote-mark {
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 25px;
          height: auto;
        }
        @media (max-width: 991px) {
          .student-testimonial {
            margin-top: 40px;
            width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default StudentTestimonial;