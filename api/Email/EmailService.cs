using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace api.Email
{
    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService (IConfiguration config){
            _config  = config   ;
        }

        public async Task SendEmailAsync(string customerEmail, string subject, string message)
            {
                var email = new MimeMessage();
                email.From.Add(new MailboxAddress("L&T Education", "lt.educationielts@gmail.com"));
                email.To.Add(new MailboxAddress("", customerEmail)); // người nhận
                email.Subject = subject; //Chủ đề

                email.Body = new TextPart("plain")
                {
                    Text = message // nội dung
                };

                using (var smtp = new SmtpClient())
                {
                    smtp.Connect("smtp.gmail.com", 587, false);
                    smtp.Authenticate("lt.educationielts@gmail.com", "jocy stit fkvn yihx");  // Use environment variables for security

                    await smtp.SendAsync(email);
                    smtp.Disconnect(true);
                }
            }
    }
}