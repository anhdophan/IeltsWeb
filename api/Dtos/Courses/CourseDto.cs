using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Models;


namespace api.Dtos.Courses
{
    //Data Transfer Object
    public class CourseDto
    {
        public int Id { get; set; }
        public string courseName { get; set; } = string.Empty;
        public string courseIMG { get; set; } = string.Empty;
        public int courseSignUp { get; set; } 
        //Giới hạn số nhập vào ,1 là chỉ có 1 số thập phân
        [Column(TypeName ="decimal(18,1)")]
        public decimal price { get; set; }
        public string courseDescription { get; set; } = string.Empty;
        public DateTime startTime {get;set;}
        public DateTime endTime {get;set;}
        public List<Class> Class  { get; set; }  = new List<Class>();
        public List<ImgLinkCourse> courseIMGMore { get; set; }  = new List<ImgLinkCourse>();
        public List<VideoLinkCourse> videoLinkCourses { get; set; } = new List<VideoLinkCourse>();
        public List<CommentDto> Comments { get; set; } = new List<CommentDto>();
        public List<Student> Students { get; set; } = new List<Student>();
        public List<Teacher> Teachers { get; set; } = new List<Teacher>();
        public int? IdCourseCurr;
        public CourseCurriculum? courseCurriculum;
    }
}