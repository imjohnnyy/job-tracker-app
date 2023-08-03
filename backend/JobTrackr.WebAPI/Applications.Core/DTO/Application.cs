namespace Applications.Core.DTO

   // This "Application" class serves as a Data Transfer Object that holds data related to an job application.
   // The purpose of this class is to prevent (hide) the return of the job application data along with the user data.
   // (The Applications.cs file under the Model folder returns both job applicaiton and user data, which is why this file is neccesarry).

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
