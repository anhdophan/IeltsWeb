using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Dtos.CourseCurriculums
{
    public class UpdateCCRequestDto
    {
       public int IdCourse { get; set; }
        public int? IdDOC { get; set; }
        public List<DayOfCourseCurriculum>? dayOfCourseCurricula {get;set;} = new List<DayOfCourseCurriculum>();
    }
}