using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Defines the Job Application entity in the SQL database.

namespace JobTrackr.DB.Model
{
    public class Application
    {
        [Key]
        public int Id { get; set; }
        public string Company { get; set; }

        public string Position { get; set; }

        public string City { get; set; }

        public DateTime Date { get; set; }

        public string JobType { get; set; }

        public string JobStatus { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}