using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class aaa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "IdCourse",
                table: "CourseCurricula",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "CourseCurricula",
                type: "int",
                nullable: true);

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseCurricula_Courses_CourseId",
                table: "CourseCurricula");

            migrationBuilder.DropIndex(
                name: "IX_CourseCurricula_CourseId",
                table: "CourseCurricula");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "CourseCurricula");

            migrationBuilder.AlterColumn<int>(
                name: "IdCourse",
                table: "CourseCurricula",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
