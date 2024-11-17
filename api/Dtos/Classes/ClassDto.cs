namespace api.Dtos.Classes
{
    public class ClassDto
    {
        public int Id { get; set; }
        public string ClassName { get; set; } = string.Empty;

        public int TeacherId { get; set; }

        public int CourseId { get; set; }
    }
}
