using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula");

            migrationBuilder.DropForeignKey(
                name: "FK_DayOfCourseCurricula_Classes_ClassId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropForeignKey(
                name: "FK_DayOfCourseCurricula_Courses_CourseId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropForeignKey(
                name: "FK_Student_TaiKhoanHVs_TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherAccounts_Teachers_TeacherId",
                table: "TeacherAccounts");

            migrationBuilder.DropIndex(
                name: "IX_TeacherAccounts_TeacherId",
                table: "TeacherAccounts");

            migrationBuilder.DropIndex(
                name: "IX_Student_TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropIndex(
                name: "IX_DayOfCourseCurricula_ClassId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropIndex(
                name: "IX_DayOfCourseCurricula_CourseId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropIndex(
                name: "IX_CourseCurricula_CourseId",
                table: "CourseCurricula");

            migrationBuilder.DropColumn(
                name: "TaiKhoanHVID",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "ClassId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "DayOfCourseCurricula");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "CourseCurricula");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaiKhoanHVID",
                table: "Student",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ClassId",
                table: "DayOfCourseCurricula",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "DayOfCourseCurricula",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "CourseCurricula",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeacherAccounts_TeacherId",
                table: "TeacherAccounts",
                column: "TeacherId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Student_TaiKhoanHVID",
                table: "Student",
                column: "TaiKhoanHVID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOfCourseCurricula_ClassId",
                table: "DayOfCourseCurricula",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_DayOfCourseCurricula_CourseId",
                table: "DayOfCourseCurricula",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseCurricula_CourseId",
                table: "CourseCurricula",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DayOfCourseCurricula_Classes_ClassId",
                table: "DayOfCourseCurricula",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DayOfCourseCurricula_Courses_CourseId",
                table: "DayOfCourseCurricula",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Student_TaiKhoanHVs_TaiKhoanHVID",
                table: "Student",
                column: "TaiKhoanHVID",
                principalTable: "TaiKhoanHVs",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherAccounts_Teachers_TeacherId",
                table: "TeacherAccounts",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
