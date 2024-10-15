using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class SignUpInfor
    {
        public int Id { get; set; }
        public string nameSt { get; set; } = string.Empty;
        public string emailSt { get; set; } = string.Empty;

        public string phoneSt { get; set; } = string.Empty;
        public DateTime creatOn { get; set; } = DateTime.Now;
        public int CourseId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public Course? Course { get; set; }

    }
}