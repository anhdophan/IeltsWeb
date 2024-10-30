using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Email;
using api.Email;
using api.Interfaces;
using api.Mappers;
using api.Models;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace api.Controllers
{
    [Route("api/Email")]
        [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly ApplicationDBContext _context; 
        private readonly EmailService _emailService;
        private readonly IEmailReponsitory _emailRepo;

        public EmailController(EmailService emailService, ApplicationDBContext context,IEmailReponsitory emailRepo)
        {
            _emailService = emailService;
            _context = context;
            _emailRepo  = emailRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var emailLogs = await _emailRepo.GetAllAsync();
            var emailDto =  emailLogs.Select(s=>s.ToEmailDto());

            return Ok(emailDto);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var email = await _emailRepo.GetByIdAsync(Id);

            if(email == null)
            {
                return NotFound();
            }

            return Ok(email.ToEmailDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateEmailRequestDto emailDto){
            var emailModel = emailDto.ToEmailFromCreateDTO();
            await _emailRepo.CreateAsync(emailModel);
            return CreatedAtAction(nameof(GetById),new {id=emailModel.Id},emailModel.ToEmailDto());
        }

        [HttpPost("SendWithTemplate")]
        public async Task<IActionResult> SendEmailWithTemplate([FromBody] EmailDto request)
        {
            try
            {
                // Load template and replace placeholders
                var templatePath = Path.Combine(Directory.GetCurrentDirectory(), "Templates", "EmailTemplate.txt");
                string emailTemplate = await System.IO.File.ReadAllTextAsync(templatePath);
                string populatedMessage = emailTemplate
                    .Replace("{CustomerName}", request.CustomerName)
                    .Replace("{CustomerEmail}", request.CustomerEmail)
                    .Replace("{Phone}", request.Phone);
                
                await _emailService.SendEmailAsync(request.CustomerEmail, request.Subject, populatedMessage);
                
                return Ok(new { message = "Email sent with populated template successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error sending email", error = ex.Message });
            }
        }
    }
}