using api.Dtos.Teacher;
using api.Models;


namespace api.Mappers
{
    public static class TeacherMapper
    {
        public static TeacherDto ToTeacherDto(this Teacher teacherModel)
        {
            return new TeacherDto()
            {
                Id = teacherModel.Id,
                NameGV = teacherModel.NameGV,
                EmailGV = teacherModel.EmailGV,
                PhoneGV = teacherModel.PhoneGV,
                DiaChi = teacherModel.DiaChi,
                IeltsScore = teacherModel.IeltsScore,
                TeacherCourses = teacherModel.TeacherCourses.Select(tc => tc.ToTeacherCourseDto()).ToList(),
                Classes = teacherModel.Classes.Select(c => c.ToClassDto()).ToList(),
                IdAccountGV = teacherModel.IdAccountGV,
            };
        }
    }
}
