using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Course;
using IeltsWebLearn.Models;

namespace api.Mappers
{
    public static class CourseMapper
    {
        public static CourseDto ToCourseDto(this Course courseModel){
            return new CourseDto {
                Id = courseModel.Id,
                courseName = courseModel.courseName,
                courseIMG = courseModel.courseIMG,
                price = courseModel.price,
                courseDescription = courseModel.courseDescription,
                Comments = courseModel.Comments.Select(c=>c.ToCommentDto()).ToList()
            };
        }

        public static Course ToCourseFromCreateDTO(this CreateCourseRequestDto courseDto){
            return new Course{
                courseName = courseDto.courseName,
                price = courseDto.price,
                courseIMG = courseDto.courseIMG,
                courseDescription = courseDto.courseDescription
            };
        }
    }
}