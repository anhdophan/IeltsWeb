using api.Dtos.Class;

namespace api.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string NameGV { get; set; } = string.Empty;
        public string EmailGV { get; set; } = string.Empty;
        public string PhoneGV { get; set; } = string.Empty;
        public string DiaChi { get; set; } = string.Empty;
        public float? IeltsScore { get; set; }

        // Các khóa học mà giảng viên dạy (qua bảng nối TeacherCourse)
        public List<TeacherCourse> TeacherCourses { get; set; } = new List<TeacherCourse>();

        // Các lớp học mà giảng viên giảng dạy
        public List<Class> Classes { get; set; } = new List<Class>();

        public int? IdAccountGV { get; set; }
        public TeacherAccountModel AccountGV { get; set; }
    }
}
