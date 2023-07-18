using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// This file defines the Application model for tracking job applications.

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