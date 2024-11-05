using api.Interfaces;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ITeacherReponsitory _teacherRepon;

        public TeacherController(ApplicationDBContext context, ITeacherReponsitory teacherRepon)
        {
            _context = context;
            _teacherRepon = teacherRepon;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var teacher = await _teacherRepon.GetAllAsync();
            var teacherDto = teacher.Select(s=>s.ToTeacherDto());
            return Ok(teacherDto);
        }
        [HttpGet]
        [Route("{Id}")]
        public async Task<IActionResult> GetById([FromBody]int Id)
        {
            var teacher = await _teacherRepon.GetByIdAnsyc();
            if (teacher == null)
            {
                return NotFound();
            }
            return Ok(teacher.ToTeacherDto());
        }
    }
}
