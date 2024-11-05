using api.Dtos.Course;
using api.Interfaces;
using api.Models;
using IeltsWebLearn.Data;
using IeltsWebLearn.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class TeacherReponsitory : ITeacherReponsitory
    {
        private readonly ApplicationDBContext _context;
        public TeacherReponsitory(ApplicationDBContext context)
        {
            _context = context;
        }

        //public async Task<Teacher> CreateAsync(Teacher teacherModel)
        //{
        //    await _context.Teachers.AddAsync(teacherModel);
        //    await _context.SaveChangesAsync();
        //    return teacherModel;
        //}

        //public async Task<Teacher?> DeleteAsync(int Id)
        //{
        //    var teacherModel = await _context.Teachers.FirstOrDefaultAsync(x => x.Id == Id);

        //    if (teacherModel == null)
        //    {
        //        return null;
        //    }
        //    _context.Teachers.Remove(teacherModel);

        //    await _context.SaveChangesAsync();
        //    return teacherModel;
        //}

        public async Task<List<Teacher>> GetAllAsync()
        {
            return await _context.Teachers.ToListAsync();
        }

        public async Task<Teacher?> GetByIdAnsyc(int id)
        {
            return await _context.Teachers.FirstOrDefaultAsync(i => i.Id == id);
        }

        //public async Task<Course?> UpdateAsync(int id, UpdateCourseRequestDto courseDto)
        //{
        //    var existingCourse = await _context.Courses.FirstOrDefaultAsync(x => x.Id == id);

        //    if (existingCourse == null)
        //    {
        //        return null;
        //    }

        //    existingCourse.courseName = courseDto.courseName;
        //    existingCourse.price = courseDto.price;
        //    existingCourse.courseDescription = courseDto.courseDescription;
        //    existingCourse.courseIMG = courseDto.courseIMG;

        //    await _context.SaveChangesAsync();

        //    return existingCourse;

        //}
    }
}
