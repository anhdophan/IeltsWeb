using IeltsWebLearn.Models;

namespace api.Models
{
    public class Class
    {
        public int Id { get; set; }
        public string ClassName { get; set; } = string.Empty;

        // Khóa ngoại đến TeacherModel
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; } = null!;

        // Khóa ngoại đến Course (nếu Class liên kết với Course)
        public int CourseId { get; set; }
        public Course Course { get; set; } = null!;
    }

}
