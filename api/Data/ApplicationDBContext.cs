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
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions) : base(dbContextOptions)
        {
            
        }                           
        //Tạo bảng cho db
        public DbSet<Course> Courses {  get; set; } 
        public DbSet<Comment> Comments { get; set; }
        public DbSet<SignUpInfor> SignUpInfors {get;set;}
        public DbSet<Student> Student {get;set;}
        public DbSet<EmailLog> EmailLogs {get;set;}
        public DbSet<Teacher> Teachers {get;set;}
        public DbSet<TeacherCourse> TeacherCourses {get;set;}
        public DbSet<Class>Classes {get;set;}

        // Đặt TeacherId và CourseId làm khóa chính
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Đặt TeacherId và CourseId làm khóa chính của TeacherCourse
            modelBuilder.Entity<TeacherCourse>()
                .HasKey(tc => new { tc.TeacherId, tc.CourseId });

            modelBuilder.Entity<TeacherCourse>()
                .HasOne(tc => tc.Teacher)
                .WithMany(t => t.TeacherCourses)
                .HasForeignKey(tc => tc.TeacherId);

            modelBuilder.Entity<TeacherCourse>()
                .HasOne(tc => tc.Course)
                .WithMany(c => c.TeacherCourses)
                .HasForeignKey(tc => tc.CourseId);
        }

    }
}
