using api.Dtos.Course;
using api.Dtos.TeacherCourse;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Mappers
{
    public static class TeacherCourseMapper
    {
        public static TeacherCourseDto ToTeacherCourseDto(this TeacherCourse teacherCourseModel)
        {
            return new TeacherCourseDto
            {
                TeacherId = teacherCourseModel.TeacherId,
                CourseId = teacherCourseModel.CourseId,

            };
        }
    }
}
