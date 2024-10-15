using System;
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
            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "Comments",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SignUpInfors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    emailSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    phoneSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    creatOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SignUpInfors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SignUpInfors_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    emailSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    passSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    phoneSt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    creatOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Student_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comments_StudentId",
                table: "Comments",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_SignUpInfors_CourseId",
                table: "SignUpInfors",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Student_CourseId",
                table: "Student",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Student_StudentId",
                table: "Comments",
                column: "StudentId",
                principalTable: "Student",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Student_StudentId",
                table: "Comments");

            migrationBuilder.DropTable(
                name: "SignUpInfors");

            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropIndex(
                name: "IX_Comments_StudentId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Comments");
        }
    }
}
