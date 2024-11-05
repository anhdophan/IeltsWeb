using api.Dtos.Course;
using api.Models;
using IeltsWebLearn.Models;
using api.Dtos.Teacher;

namespace api.Interfaces
{
    public interface ITeacherReponsitory
    {
        //Task<Teacher> CreateAsync(Teacher teacher);
        Task<List<Teacher>> GetAllAsync();
        Task<Teacher?> GetByIdAnsyc(int Id);
        //Task<Teacher?> UpdateAsync(int Id );
        //Task<Teacher?> DeleteAsync(int Id);
    }
}
