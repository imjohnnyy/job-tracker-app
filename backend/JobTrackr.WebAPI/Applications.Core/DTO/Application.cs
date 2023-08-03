namespace Applications.Core.DTO
{
    public class Application
    {
        public int Id { get; set; }
        public string Company { get; set; }

        public string Position { get; set; }

        public string City { get; set; }

        public DateTime Date { get; set; }

        public string JobType { get; set; }

        public string JobStatus { get; set; }

        // Converts an instance of the database model class ("JobTrackr.DB.Model.Application")
        // into an instance of the "Application" DTO class.
        public static explicit operator Application(JobTrackr.DB.Model.Application a) => new Application
        {
            Id = a.Id,
            Company = a.Company,
            Position = a.Position,
            City = a.City,
            Date = a.Date,
            JobType = a.JobType,
            JobStatus = a.JobStatus
        };
       
    }
}
