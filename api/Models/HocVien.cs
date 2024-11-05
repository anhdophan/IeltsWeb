using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class HocVien
 {
     [Key] 
     public int Id { get; set; }

     [Required(ErrorMessage = "Họ tên không được để trống")]
     public string HoTen { get; set; }

     public DateTime NgaySinh { get; set; }
     public string DiaChi { get; set; }

     [Required(ErrorMessage = "Email không được để trống")]
     [EmailAddress(ErrorMessage = "Email không đúng định dạng")]
     public string Email { get; set; }

     [Phone(ErrorMessage = "Sđt không đúng định dạng")]
     [StringLength(15, ErrorMessage = "Sđt không được quá 15 ký tự")]
     public string SDT { get; set; }
     [Range(0, 10, ErrorMessage = "Điểm phải từ 0 đến 10")]
     public double Score { get; set; }
     public int? IdCourse { get; set; }

     public Course? course {get;set;}

     [Required(ErrorMessage = "Mã lớp bắt buộc")]
     public int? IdClass { get; set; }
     public Class? Class {get;set;}

     [Required(ErrorMessage = "Bắt buộc")]
    
     [Url(ErrorMessage = "Avatar phải là một URL hợp lệ")]
     public string Avatar { get; set; }
     public List<string> CacKhoaHocDaHoc { get; set; } = new List<string>();
 }
}