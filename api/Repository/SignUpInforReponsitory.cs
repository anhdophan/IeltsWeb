using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.SignUpInfor;
using api.Interfaces;
using api.Models;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class SignUpInforReponsitory : ISignUpInforReponsitory
    {
        private readonly ApplicationDBContext _context;
        public SignUpInforReponsitory(ApplicationDBContext context)
        {
            _context = context;
        }

        public Task<bool> SignUpExists(int id)
        {
            return _context.Courses.AnyAsync(s=>s.Id==id);
        }

         public async Task<List<SignUpInfor>> GetAllAsync()
        {
            return await _context.SignUpInfors.ToListAsync();
        }

        public async Task<SignUpInfor?> GetByIdAsync(int id)
        {
           return await _context.SignUpInfors.FindAsync(id);
        }

        public async Task<SignUpInfor> CreateAsync(SignUpInfor signUpInforModel)
        {
            await _context.SignUpInfors.AddAsync(signUpInforModel);
            signUpInforModel.status = false ;
            await _context.SaveChangesAsync();
            return signUpInforModel;
        }

        public async Task<SignUpInfor?> DeleteAsync(int Id)
        {
            var signUpInforModel = await _context.SignUpInfors.FirstOrDefaultAsync(x=>x.Id==Id);

            if(signUpInforModel == null){
                return null;
            }
            _context.SignUpInfors.Remove(signUpInforModel);

            await _context.SaveChangesAsync();
            return signUpInforModel;
        }

        public async Task<SignUpInfor?> UpdateAsync(int id, UpdateSignupRequestDto signupRequestDtoDto)
        {
            var existingSignup = await _context.SignUpInfors.FirstOrDefaultAsync(x => x.Id == id);

            if (existingSignup == null)
            {
                return null;
            }

            // Override the status to true
            existingSignup.status = true; 
            await _context.SaveChangesAsync();

            return existingSignup; 
        }

    }
}