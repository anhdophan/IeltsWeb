using api.Models;
using IeltsWebLearn.Models;
using Microsoft.EntityFrameworkCore;

namespace IeltsWebLearn.Data
{
    //Dùng để tìm kiếm và sử dụng các bảng riêng lẻ trong DB
    // : DbContext là kế thừa
    public class ApplicationDBContext : DbContext
    {
        //Tạo db và các bảng bằng EntityFrameWork
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }
        //Tạo bảng cho db
        public DbSet<Course> Courses {  get; set; } 
        public DbSet<Comment> Comments { get; set; }
        public DbSet<SignUpInfor> SignUpInfors {get;set;}
        public DbSet<Student> Student {get;set;}

    }
}
