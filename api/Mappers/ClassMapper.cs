using api.Dtos.Class;
using api.Dtos.Course;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Mappers
{
    public static class ClassMapper
    {
        public static ClassDto ToClassDto(this Class classModel)
        {
            return new ClassDto
            {
                Id = classModel.Id, 
                ClassName = classModel.ClassName,   
                TeacherId = classModel.TeacherId,
                CourseId = classModel.CourseId,
            };
        }
    }
}
