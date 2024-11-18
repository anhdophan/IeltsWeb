using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IeltsWebLearn.Data;
using api.Interfaces;
using api.Mappers;
using api.Dtos.CourseCurriculums;

namespace api.Controllers
{
    [Route("api/CourseCurriculum")]
    [ApiController]
    public class CourseCCController : ControllerBase
    {
         //readonly để chống người dùng chỉnh sửa db
        private readonly ApplicationDBContext _context;
        private readonly ICourseReponsitory _courseRepo;
        private readonly ICourseCCReponsitory _courseCCRepon;
        //ApplicationDBContext để tương tác với db
        public CourseCCController(ApplicationDBContext context, ICourseCCReponsitory courseCCRepon,ICourseReponsitory courseRepo)
        {
            _courseCCRepon= courseCCRepon;
            _context = context;
            _courseRepo = courseRepo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var coursesCC = await _courseCCRepon.GetAllAsync();
            var courseCCDto =  coursesCC.Select(s=>s.ToCCDto());
            return Ok(courseCCDto);
        }


        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var courseCC = await _courseCCRepon.GetByIdAnsyc(Id);

            if(courseCC == null)
            {
                return NotFound();
            }

            return Ok(courseCC.ToCCDto());
        }
     
       [HttpPost("{courseId}")]
       public async Task<IActionResult> Create([FromRoute] int courseId,CreateCCRequestDto courseCCDto){
            if(!await _courseRepo.CourseExists(courseId)){
                return BadRequest("Course Không Tồn Tại");
            }
            var courseCCModel = courseCCDto.ToCourseCCFromCreateDTO(courseId);
            await _courseCCRepon.CreateAsync(courseCCModel);
            return CreatedAtAction(nameof(GetById),new {id=courseCCModel.Id},courseCCModel.ToCCDto());
       }

       [HttpPut]
       [Route("{Id}")]
       public async Task<IActionResult> Update([FromRoute] int Id,[FromBody] UpdateCCRequestDto updateCCDto){
            var courseCCModel = await _courseCCRepon.UpdateAsync(Id,updateCCDto);
            if(courseCCModel == null){
                return NotFound();
            }

            return Ok(courseCCModel.ToCCDto());
       }

       [HttpDelete]
       [Route("{Id}")]
       public async Task<IActionResult> Delete([FromRoute] int Id){
        var courseCCModel = await _courseCCRepon.DeleteAsync(Id);
        
        if(courseCCModel == null){
            return NotFound();
        }
        
        return NoContent();
       }
    }
}