using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class MoreDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdTaiKhoanHV",
                table: "HocViens");

            migrationBuilder.AddColumn<int>(
                name: "AccId",
                table: "Student",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TaiKhoanHVID",
                table: "Student",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "HV",
                table: "Courses",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "endTime",
                table: "Courses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "startTime",
                table: "Courses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Classes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Room = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdCourse = table.Column<int>(type: "int", nullable: false),
                    WeakTime = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    EndTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    IdGV = table.Column<int>(type: "int", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Classes_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CourseCurricula",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCourse = table.Column<int>(type: "int", nullable: false),
                    IdDOC = table.Column<int>(type: "int", nullable: true),
                    IdImg = table.Column<int>(type: "int", nullable: true),
                    IdVideo = table.Column<int>(type: "int", nullable: true),
                    CourseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseCurricula", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CourseCurricula_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ImgLinkCourses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCourse = table.Column<int>(type: "int", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgLinkCourses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImgLinkCourses_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "VideoLinkCourses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCourse = table.Column<int>(type: "int", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoLinkCourses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VideoLinkCourses_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DayOfCourseCurricula",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ngayHoc = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LinkQuiz = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IDCourse = table.Column<int>(type: "int", nullable: true),
                    CourseCurriculumId = table.Column<int>(type: "int", nullable: true),
                    CourseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOfCourseCurricula", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DayOfCourseCurricula_CourseCurricula_CourseCurriculumId",
                        column: x => x.CourseCurriculumId,
                        principalTable: "CourseCurricula",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DayOfCourseCurricula_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ImgLinkCourseCurrs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCourseCurr = table.Column<int>(type: "int", nullable: true),
                    DOC = table.Column<int>(type: "int", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseCurriculumId = table.Column<int>(type: "int", nullable: true),
                    DayOfCourseCurriculumId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgLinkCourseCurrs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImgLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                        column: x => x.CourseCurriculumId,
                        principalTable: "CourseCurricula",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ImgLinkCourseCurrs_DayOfCourseCurricula_DayOfCourseCurriculumId",
                        column: x => x.DayOfCourseCurriculumId,
                        principalTable: "DayOfCourseCurricula",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "VideoLinkCourseCurrs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCourseCurr = table.Column<int>(type: "int", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseCurriculumId = table.Column<int>(type: "int", nullable: true),
                    DayOfCourseCurriculumId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoLinkCourseCurrs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VideoLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                        column: x => x.CourseCurriculumId,
                        principalTable: "CourseCurricula",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VideoLinkCourseCurrs_DayOfCourseCurricula_DayOfCourseCurriculumId",
                        column: x => x.DayOfCourseCurriculumId,
                        principalTable: "DayOfCourseCurricula",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Student_TaiKhoanHVID",
                table: "Student",
                column: "TaiKhoanHVID");

            migrationBuilder.CreateIndex(
                name: "IX_Classes_CourseId",
                table: "Classes",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseCurricula_CourseId",
                table: "CourseCurricula",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_DayOfCourseCurricula_CourseCurriculumId",
                table: "DayOfCourseCurricula",
                column: "CourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_DayOfCourseCurricula_CourseId",
                table: "DayOfCourseCurricula",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_ImgLinkCourseCurrs_CourseCurriculumId",
                table: "ImgLinkCourseCurrs",
                column: "CourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_ImgLinkCourseCurrs_DayOfCourseCurriculumId",
                table: "ImgLinkCourseCurrs",
                column: "DayOfCourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_ImgLinkCourses_CourseId",
                table: "ImgLinkCourses",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoLinkCourseCurrs_CourseCurriculumId",
                table: "VideoLinkCourseCurrs",
                column: "CourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoLinkCourseCurrs_DayOfCourseCurriculumId",
                table: "VideoLinkCourseCurrs",
                column: "DayOfCourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoLinkCourses_CourseId",
                table: "VideoLinkCourses",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Student_TaiKhoanHVs_TaiKhoanHVID",
                table: "Student",
                column: "TaiKhoanHVID",
                principalTable: "TaiKhoanHVs",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Student_TaiKhoanHVs_TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropTable(
                name: "Classes");

            migrationBuilder.DropTable(
                name: "ImgLinkCourseCurrs");

            migrationBuilder.DropTable(
                name: "ImgLinkCourses");

            migrationBuilder.DropTable(
                name: "VideoLinkCourseCurrs");

            migrationBuilder.DropTable(
                name: "VideoLinkCourses");

            migrationBuilder.DropTable(
                name: "DayOfCourseCurricula");

            migrationBuilder.DropTable(
                name: "CourseCurricula");

            migrationBuilder.DropIndex(
                name: "IX_Student_TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "AccId",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "HV",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "endTime",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "startTime",
                table: "Courses");

            migrationBuilder.AddColumn<int>(
                name: "IdTaiKhoanHV",
                table: "HocViens",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
