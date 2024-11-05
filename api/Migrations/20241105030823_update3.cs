using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class update3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImgLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                table: "ImgLinkCourseCurrs");

            migrationBuilder.DropForeignKey(
                name: "FK_VideoLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                table: "VideoLinkCourseCurrs");

            migrationBuilder.DropIndex(
                name: "IX_VideoLinkCourseCurrs_CourseCurriculumId",
                table: "VideoLinkCourseCurrs");

            migrationBuilder.DropIndex(
                name: "IX_ImgLinkCourseCurrs_CourseCurriculumId",
                table: "ImgLinkCourseCurrs");

            migrationBuilder.DropColumn(
                name: "CourseCurriculumId",
                table: "VideoLinkCourseCurrs");

            migrationBuilder.DropColumn(
                name: "CourseCurriculumId",
                table: "ImgLinkCourseCurrs");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseCurriculumId",
                table: "VideoLinkCourseCurrs",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CourseCurriculumId",
                table: "ImgLinkCourseCurrs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_VideoLinkCourseCurrs_CourseCurriculumId",
                table: "VideoLinkCourseCurrs",
                column: "CourseCurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_ImgLinkCourseCurrs_CourseCurriculumId",
                table: "ImgLinkCourseCurrs",
                column: "CourseCurriculumId");

            migrationBuilder.AddForeignKey(
                name: "FK_ImgLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                table: "ImgLinkCourseCurrs",
                column: "CourseCurriculumId",
                principalTable: "CourseCurricula",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VideoLinkCourseCurrs_CourseCurricula_CourseCurriculumId",
                table: "VideoLinkCourseCurrs",
                column: "CourseCurriculumId",
                principalTable: "CourseCurricula",
                principalColumn: "Id");
        }
    }
}
