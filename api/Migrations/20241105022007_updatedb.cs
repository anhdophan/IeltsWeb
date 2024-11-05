using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class updatedb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HocViens_Courses_courseId",
                table: "HocViens");

            migrationBuilder.AlterColumn<int>(
                name: "courseId",
                table: "HocViens",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "IdCourse",
                table: "HocViens",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ClassId",
                table: "HocViens",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HocViens_ClassId",
                table: "HocViens",
                column: "ClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_HocViens_Classes_ClassId",
                table: "HocViens",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HocViens_Courses_courseId",
                table: "HocViens",
                column: "courseId",
                principalTable: "Courses",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HocViens_Classes_ClassId",
                table: "HocViens");

            migrationBuilder.DropForeignKey(
                name: "FK_HocViens_Courses_courseId",
                table: "HocViens");

            migrationBuilder.DropIndex(
                name: "IX_HocViens_ClassId",
                table: "HocViens");

            migrationBuilder.DropColumn(
                name: "ClassId",
                table: "HocViens");

            migrationBuilder.AlterColumn<int>(
                name: "courseId",
                table: "HocViens",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "IdCourse",
                table: "HocViens",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_HocViens_Courses_courseId",
                table: "HocViens",
                column: "courseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
