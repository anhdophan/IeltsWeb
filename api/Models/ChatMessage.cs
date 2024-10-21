using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ChatMessage
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string Sender { get; set; } // "customer" hoặc "admin"
        public DateTime Timestamp { get; set; } = DateTime.Now;
    }
}