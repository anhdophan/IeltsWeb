using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Email;
using api.Email;
using api.Models;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly ApplicationDBContext _context; 
        private readonly EmailService _emailService;

        public EmailController(EmailService emailService, ApplicationDBContext context)
        {
            _emailService = emailService;
            _context = context;
        }

        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail([FromBody] EmailDto   request)
        {
            try
            {
                await _emailService.SendEmailAsync(request.CustomerEmail, request.Subject, request.Message);
                return Ok(new { message = "Email sent successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error sending email", error = ex.Message });
            }
        }
        [HttpPost]
        public async Task<IActionResult> LogEmail([FromBody] EmailLog log)
        {
            if (log == null)
            {
                return BadRequest("Email log data is missing.");
            }

            log.SentTime = DateTime.UtcNow; // Set the current time

            _context.EmailLogs.Add(log);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Email log saved successfully." });
        }
    }
}