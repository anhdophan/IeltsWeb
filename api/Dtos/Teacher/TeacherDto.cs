using api.Dtos.Class;
using api.Dtos.TeacherCourse;
using api.Models;

namespace api.Dtos.Teacher
{
    public class TeacherDto
    {
        public int Id { get; set; }
        public string NameGV { get; set; } = string.Empty;
        public string EmailGV { get; set; } = string.Empty;
        public string PhoneGV { get; set; } = string.Empty;
        public string DiaChi { get; set; } = string.Empty;
        public float? IeltsScore { get; set; }

        public List<TeacherCourseDto> TeacherCourses { get; set; } = new List<TeacherCourseDto>();

        public List<ClassDto> Classes { get; set; } = new List<ClassDto>();

        public int? IdAccountGV { get; set; }
    }
}
