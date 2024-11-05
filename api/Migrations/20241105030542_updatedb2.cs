using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class updatedb2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula");

            migrationBuilder.DropColumn(
                name: "HV",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IdImg",
                table: "CourseCurricula");

            migrationBuilder.DropColumn(
                name: "IdVideo",
                table: "CourseCurricula");

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "CourseCurricula",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula");

            migrationBuilder.AddColumn<int>(
                name: "HV",
                table: "Courses",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "CourseCurricula",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdImg",
                table: "CourseCurricula",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdVideo",
                table: "CourseCurricula",
                type: "int",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
