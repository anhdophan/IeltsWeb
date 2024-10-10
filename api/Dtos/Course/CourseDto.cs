using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;

namespace api.Dtos.Course
{
    //Data Transfer Object
    public class CourseDto
    {
        public int Id { get; set; }
        public string courseName { get; set; } = string.Empty;
        public decimal price { get; set; }
        public string courseDescription { get; set; } = string.Empty;
        public List<CommentDto> Comments {get;set;}
    }
}