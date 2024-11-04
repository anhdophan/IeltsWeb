using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class CourseCurriculum
    {
        public int Id { get; set; }
        public int IdCourse { get; set; }
        public int? IdDOC { get; set; }
        public int? IdImg { get; set; }
        public int? IdVideo { get; set; }
        // Navigation properties
        public Course Course { get; set; }

        public List<ImgLinkCourseCurr> ImgLinks { get; set; }
        public List<VideoLinkCourseCurr> VideoLinks { get; set; }
        public List<DayOfCourseCurriculum> DayofCC { get; set; }
       
    }
}