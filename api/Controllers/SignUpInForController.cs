using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.SignUpInfor;
using api.Interfaces;
using api.Mappers;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/SignUpInfor")]
    [ApiController]
    public class SignUpInForController : ControllerBase
    {
        //readonly để chống người dùng chỉnh sửa db
        private readonly ApplicationDBContext _context;
        private readonly ISignUpInforReponsitory _signupinforRepon;
        private readonly ICourseReponsitory _courseRepo;
        //ApplicationDBContext để tương tác với db
        public SignUpInForController(ApplicationDBContext context, ISignUpInforReponsitory signupinforRepon,ICourseReponsitory courseRepo)
        {
            _signupinforRepon= signupinforRepon;
            _courseRepo = courseRepo;
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var signUpInfors = await _signupinforRepon.GetAllAsync();
            var signupDto =  signUpInfors.Select(s=>s.ToSignUpInforDto());

            return Ok(signupDto);
        }


        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var signUp = await _signupinforRepon.GetByIdAsync(Id);

            if(signUp == null)
            {
                return NotFound();
            }

            return Ok(signUp.ToSignUpInforDto());
        }
        //dùng FromBody bởi vì dữ liệu được truyền vào từ phần body của http 
        //gửi request tới Dto để hạn chế lượng thông tin mà người dùng gửi tới
       [HttpPost("{courseId}")]
        public async Task<IActionResult> Create([FromRoute] int courseId, [FromBody] CreateSignUpInforRequestDto signupDto)
        {
            // Check if the course exists
            if (!await _courseRepo.CourseExists(courseId))
            {
                return BadRequest("Course Không Tồn Tại");
            }

            // Convert the CreateSignUpInforRequestDto to the model and set the courseId
            var signupModel = signupDto.ToSignUpInforFromCreateDTO(courseId);

            // Create the SignUpInfor entry in the database
            await _signupinforRepon.CreateAsync(signupModel);

            // Fetch the course and increment the courseSignUp field
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == courseId);
            if (course != null)
            {
                course.courseSignUp += 1;  // Increment courseSignUp
                await _context.SaveChangesAsync();  // Save the updated course
            }

            // Return the created resource with status 201
            return CreatedAtAction(nameof(GetById), new { id = signupModel.Id }, signupModel.ToSignUpInforDto());
        }

        [HttpPut]
        [Route("{Id}")]
        public async Task<IActionResult> Update([FromRoute] int Id,[FromBody] UpdateSignupRequestDto updateDto){
                var courseModel = await _signupinforRepon.UpdateAsync(Id,updateDto);
                if(courseModel == null){
                    return NotFound();
                }

                return Ok(courseModel.ToSignUpInforDto());
        }

    
       [HttpDelete]
       [Route("{Id}")]
       public async Task<IActionResult> Delete([FromRoute] int Id){
        var signupModel = await _signupinforRepon.DeleteAsync(Id);
        
        if(signupModel == null){
            return NotFound();
        }
        
        return NoContent();
       }
    }
}