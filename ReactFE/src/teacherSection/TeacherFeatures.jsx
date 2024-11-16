import React from 'react';
import FeatureCard from './FeatureCard';

const teacherFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fd8a6b88601d20d3ea8aa1f89b386a525f29dba3692a5cd4deb1a58fb6940c6?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "CHUYÊN MÔN GIỎI",
    description: "Đội ngũ giáo viên chuyên môn giỏi, xuất thân từ các các trường học uy tín hàng đầu quốc tế hoặc trường ngoại ngữ có tiếng tại Việt Nam, đồng thời sở hữu chứng chỉ IELTS/TESOL với phương pháp và kỹ năng giảng dạy chuyên sâu. Bên cạnh đó giáo viên L & T Education được tinh tuyển, đào tạo khắt khe, áp dụng đồng bộ phương pháp RIPL trong giảng dạy, giúp học viên cán đích thành công."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a45c384e19991162d0b84dc4a8538b6202cc79c86d0acb861104f3aaee7a4925?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "NHIỆT TÌNH",
    description: "Đội ngũ L & T Education lấy 5 giá trị cốt lõi làm kim chỉ nam cho mọi trường hợp: Tận tâm phục vụ, Trách nhiệm kỷ luật, Đổi mới sáng tạo, Dám nghĩ dám làm, Chính trực thẳng thắn. Thầy cô đặt hiệu quả học tập của học viên làm ưu tiên số 1 trong mọi suy nghĩ và hành động nên luôn cống hiến hết mình cho từng bài giảng để học viên đạt hiệu quả tiếp thu tối đa."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9df665cc8703f09626977f2a4c5e7d03edd90a977342247fc7297db9d85e6a6?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6",
    title: "SÁNG TẠO",
    description: "Giáo viên L & T Education luôn chủ động nghiên cứu những phương pháp giảng dạy mới, sáng kiến trong nghề để mỗi bài giảng trở nên hấp dẫn và học trò tiếp thu hiệu quả hơn. Tâm niệm học những gì cần thiết, hữu ích chứ không học dàn trải tất cả những gì tiếng Anh có nên thầy cô luôn áp dụng cách học logic, thực hành tối đa, cùng học viên theo đuổi mục tiêu đến cùng."
  }
];

function TeacherFeatures() {
  return (
    <section className="teacher-features">
      <h2 className="section-title">500+ GIÁO VIÊN TRUYỀN CẢM HỨNG</h2>
      <div className="feature-container">
        {teacherFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <style jsx>{`
        .teacher-features {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          margin-top: 50px;
        }
        .section-title {
          color: #05224a;
          text-align: center;
          font: 700 30px/1 "Open Sans", sans-serif;
          margin-bottom: 51px;
        }
        .feature-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
        }
        @media (max-width: 991px) {
          .feature-container {
            flex-direction: column;
            align-items: center;
          }
          .section-title {
            font-size: 24px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
}

export default TeacherFeatures;