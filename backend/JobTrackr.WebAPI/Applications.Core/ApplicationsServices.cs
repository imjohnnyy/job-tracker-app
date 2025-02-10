using Applications.Core.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

// This ApplicationsServices class allows us to perform actions to the database e.g. Retrieving All Job Applications, or
// deleting a job application etc.

namespace Applications.Core
{
    public class ApplicationsServices : IApplicationsServices
    {
        private readonly JobTrackr.DB.AppDbContext _dbContext;
        private readonly JobTrackr.DB.Model.User _user;


        public ApplicationsServices(JobTrackr.DB.AppDbContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _user = _dbContext.Users
                 .First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);

        }

        // Retrieves a specific job application by ID from the database
        public Application GetApplication(int id) =>
            _dbContext.Applications.Where(a => a.User.Id == _user.Id && a.Id == id)
                .Select(a => (Application)a)
                .First();




        // Retrieves a list of job applications from the database
        public List<Application> GetApplications() =>
            _dbContext.Applications.Where(a => a.User.Id == _user.Id)
                .Select(a => (Application)a)
                .ToList();


        // Creates a new job application in the database
        public Application CreateApplication(Application application)
        {
            // Ensure the _user is set (the current authenticated user)
            if (_user == null)
            {
                throw new InvalidOperationException("User must be set.");
            }

            // Retrieve the full User object from the database (based on the _user.Id)
            var user = _dbContext.Users.FirstOrDefault(u => u.Id == _user.Id);

            if (user == null)
            {
                throw new InvalidOperationException("User not found.");
            }

            // Map the DTO to the database model (JobTrackr.DB.Model.Application)
            var dbApplication = new JobTrackr.DB.Model.Application
            {
                Company = application.Company,
                Position = application.Position,
                City = application.City,
                Date = application.Date,
                JobType = application.JobType,
                JobStatus = application.JobStatus,

                // Associate the application with the current user (set the full User object)
                User = user // Set the full User object here
            };

            // Add the new application to the DbContext and save changes
            _dbContext.Add(dbApplication);
            _dbContext.SaveChanges();

            // Optionally, return the saved application as a DTO (mapping the model back to the DTO)
            return (Application)dbApplication; // Mapping the saved model back to the DTO
        }


        // Deletes a job application from the database
        public void DeleteApplication(Application application)
        {
            var dbApplication = _dbContext.Applications.First(a => a.User.Id == _user.Id && a.Id == application.Id);
            _dbContext.Applications.Remove(dbApplication);
            _dbContext.SaveChanges();
        }

        // Updates an existing job application in the database
        public Application EditApplication(Application application)
        {
            var dbApplication = _dbContext.Applications.First(a => a.User.Id == _user.Id && a.Id == application.Id);

            // Update the properties of the existing application with the new values
            dbApplication.Company = application.Company;
            dbApplication.Position = application.Position;
            dbApplication.City = application.City;
            dbApplication.Date = application.Date;
            dbApplication.JobType = application.JobType;
            dbApplication.JobStatus = application.JobStatus;

            _dbContext.SaveChanges();

            return application;
        }


    }
}