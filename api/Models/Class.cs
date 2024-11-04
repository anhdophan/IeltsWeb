using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class Class
    {
         public int Id { get; set; }
        public string Room { get; set; }
        public int IdCourse { get; set; }
        public DayOfWeek WeakTime { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int IdGV { get; set; }

        // Navigation properties
        public Course Course { get; set; }
    }
}