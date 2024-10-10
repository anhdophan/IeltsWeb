using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Course
{
    public class UpdateCourseRequestDto
    {
        public string courseName { get; set; } = string.Empty;
        //Giới hạn số nhập vào ,1 là chỉ có 1 số thập phân
        [Column(TypeName ="decimal(18,1)")]
        public decimal price { get; set; }

        public string courseDescription { get; set; } = string.Empty;
    }
}