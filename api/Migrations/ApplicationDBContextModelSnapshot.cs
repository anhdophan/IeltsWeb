﻿// <auto-generated />
using System;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CourseTeacher", b =>
                {
                    b.Property<int>("CoursesId")
                        .HasColumnType("int");

                    b.Property<int>("TeachersId")
                        .HasColumnType("int");

                    b.HasKey("CoursesId", "TeachersId");

                    b.HasIndex("TeachersId");

                    b.ToTable("CourseTeacher");
                });

            modelBuilder.Entity("IeltsWebLearn.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("creatOn")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("IeltsWebLearn.Models.Course", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("courseDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("courseIMG")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("courseName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("courseSignUp")
                        .HasColumnType("int");

                    b.Property<DateTime>("endTime")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("price")
                        .HasColumnType("decimal(18,1)");

                    b.Property<DateTime>("startTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("api.Models.Class", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<TimeSpan>("EndTime")
                        .HasColumnType("time");

                    b.Property<int>("IdCourse")
                        .HasColumnType("int");

                    b.Property<int?>("IdGV")
                        .HasColumnType("int");

                    b.Property<string>("Room")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<TimeSpan>("StartTime")
                        .HasColumnType("time");

                    b.Property<int?>("TeacherId")
                        .HasColumnType("int");

                    b.Property<string>("WeakTimes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("TeacherId");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("api.Models.CourseCurriculum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int>("IdCourse")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("CourseCurricula");
                });

            modelBuilder.Entity("api.Models.DayOfCourseCurriculum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("ClassId")
                        .HasColumnType("int");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("CourseCurriculumId")
                        .HasColumnType("int");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int?>("IDClass")
                        .HasColumnType("int");

                    b.Property<int?>("IDCourse")
                        .HasColumnType("int");

                    b.Property<int?>("IDCourseCC")
                        .HasColumnType("int");

                    b.Property<string>("LinkQuiz")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ngayHoc")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("CourseCurriculumId");

                    b.HasIndex("CourseId");

                    b.ToTable("DayOfCourseCurricula");
                });

            modelBuilder.Entity("api.Models.EmailLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("SentTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Subject")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmailLogs");
                });

            modelBuilder.Entity("api.Models.ImgLinkCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int?>("IdCourse")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("ImgLinkCourses");
                });

            modelBuilder.Entity("api.Models.ImgLinkCourseCurr", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("DOC")
                        .HasColumnType("int");

                    b.Property<int?>("DayOfCourseCurriculumId")
                        .HasColumnType("int");

                    b.Property<int?>("IdCourseCurr")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DayOfCourseCurriculumId");

                    b.ToTable("ImgLinkCourseCurrs");
                });

            modelBuilder.Entity("api.Models.SignUpInfor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CourseId")
                        .HasColumnType("int");

                    b.Property<DateTime>("creatOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("emailSt")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("nameSt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phoneSt")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("SignUpInfors");
                });

            modelBuilder.Entity("api.Models.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AccId")
                        .HasColumnType("int");

                    b.Property<int?>("ClassId")
                        .HasColumnType("int");

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int?>("TaiKhoanHVID")
                        .HasColumnType("int");

                    b.Property<string>("addressSt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emailSt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nameSt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phoneSt")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("CourseId");

                    b.HasIndex("TaiKhoanHVID");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("api.Models.TaiKhoanHV", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MatKhau")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("idHV")
                        .IsRequired()
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("TaiKhoanHVs");
                });

            modelBuilder.Entity("api.Models.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DiaChi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmailGV")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IdAccountGV")
                        .HasColumnType("int");

                    b.Property<float?>("IeltsScore")
                        .HasColumnType("real");

                    b.Property<string>("NameGV")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneGV")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("teacherIMG")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("api.Models.TeacherAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TeacherId")
                        .IsUnique();

                    b.ToTable("TeacherAccounts");
                });

            modelBuilder.Entity("api.Models.VideoLinkCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CourseId")
                        .HasColumnType("int");

                    b.Property<int?>("IdCourse")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("VideoLinkCourses");
                });

            modelBuilder.Entity("api.Models.VideoLinkCourseCurr", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("DayOfCourseCurriculumId")
                        .HasColumnType("int");

                    b.Property<int?>("IdCourseCurr")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DayOfCourseCurriculumId");

                    b.ToTable("VideoLinkCourseCurrs");
                });

            modelBuilder.Entity("CourseTeacher", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", null)
                        .WithMany()
                        .HasForeignKey("CoursesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Models.Teacher", null)
                        .WithMany()
                        .HasForeignKey("TeachersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("IeltsWebLearn.Models.Comment", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany("Comments")
                        .HasForeignKey("CourseId");

                    b.Navigation("Course");
                });

            modelBuilder.Entity("api.Models.Class", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany("Class")
                        .HasForeignKey("CourseId");

                    b.HasOne("api.Models.Teacher", null)
                        .WithMany("Classes")
                        .HasForeignKey("TeacherId");

                    b.Navigation("Course");
                });

            modelBuilder.Entity("api.Models.CourseCurriculum", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId");

                    b.Navigation("Course");
                });

            modelBuilder.Entity("api.Models.DayOfCourseCurriculum", b =>
                {
                    b.HasOne("api.Models.Class", "Class")
                        .WithMany()
                        .HasForeignKey("ClassId");

                    b.HasOne("api.Models.CourseCurriculum", "CourseCurriculum")
                        .WithMany("dayOfCourseCurricula")
                        .HasForeignKey("CourseCurriculumId");

                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId");

                    b.Navigation("Class");

                    b.Navigation("Course");

                    b.Navigation("CourseCurriculum");
                });

            modelBuilder.Entity("api.Models.ImgLinkCourse", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", null)
                        .WithMany("courseIMGMore")
                        .HasForeignKey("CourseId");
                });

            modelBuilder.Entity("api.Models.ImgLinkCourseCurr", b =>
                {
                    b.HasOne("api.Models.DayOfCourseCurriculum", null)
                        .WithMany("IdIMGlink")
                        .HasForeignKey("DayOfCourseCurriculumId");
                });

            modelBuilder.Entity("api.Models.SignUpInfor", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("api.Models.Student", b =>
                {
                    b.HasOne("api.Models.Class", "Class")
                        .WithMany("Students")
                        .HasForeignKey("ClassId");

                    b.HasOne("IeltsWebLearn.Models.Course", "Course")
                        .WithMany("Students")
                        .HasForeignKey("CourseId");

                    b.HasOne("api.Models.TaiKhoanHV", "TaiKhoanHV")
                        .WithMany()
                        .HasForeignKey("TaiKhoanHVID");

                    b.Navigation("Class");

                    b.Navigation("Course");

                    b.Navigation("TaiKhoanHV");
                });

            modelBuilder.Entity("api.Models.TeacherAccount", b =>
                {
                    b.HasOne("api.Models.Teacher", "teacher")
                        .WithOne("AccountGV")
                        .HasForeignKey("api.Models.TeacherAccount", "TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("teacher");
                });

            modelBuilder.Entity("api.Models.VideoLinkCourse", b =>
                {
                    b.HasOne("IeltsWebLearn.Models.Course", null)
                        .WithMany("videoLinkCourses")
                        .HasForeignKey("CourseId");
                });

            modelBuilder.Entity("api.Models.VideoLinkCourseCurr", b =>
                {
                    b.HasOne("api.Models.DayOfCourseCurriculum", null)
                        .WithMany("IdlinkVideo")
                        .HasForeignKey("DayOfCourseCurriculumId");
                });

            modelBuilder.Entity("IeltsWebLearn.Models.Course", b =>
                {
                    b.Navigation("Class");

                    b.Navigation("Comments");

                    b.Navigation("Students");

                    b.Navigation("courseIMGMore");

                    b.Navigation("videoLinkCourses");
                });

            modelBuilder.Entity("api.Models.Class", b =>
                {
                    b.Navigation("Students");
                });

            modelBuilder.Entity("api.Models.CourseCurriculum", b =>
                {
                    b.Navigation("dayOfCourseCurricula");
                });

            modelBuilder.Entity("api.Models.DayOfCourseCurriculum", b =>
                {
                    b.Navigation("IdIMGlink");

                    b.Navigation("IdlinkVideo");
                });

            modelBuilder.Entity("api.Models.Teacher", b =>
                {
                    b.Navigation("AccountGV")
                        .IsRequired();

                    b.Navigation("Classes");
                });
#pragma warning restore 612, 618
        }
    }
}
