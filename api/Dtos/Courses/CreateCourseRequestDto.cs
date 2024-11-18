using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Dtos.Courses
{
    public class CreateCourseRequestDto
    {
        public string courseName { get; set; } = string.Empty;
         public string courseIMG { get; set; } = string.Empty;
        public string courseDescription { get; set; } = string.Empty;
        public decimal price { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }

        [NotMapped]
        public List<IFormFile> Images { get; set; } = new List<IFormFile>();

        [NotMapped]
        public List<IFormFile> Videos { get; set; } = new List<IFormFile>();
    }

}