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
        // Updated GetApplications with pagination
        public (List<Application> Applications, int TotalCount) GetApplications(int page = 1, int limit = 6)
        {
            if (page < 1) page = 1;  // Ensure that the page is at least 1
            if (limit < 1) limit = 6;  

            // Calculate the skip value based on page and limit
            var skip = (page - 1) * limit;

            // Get the total number of applications (for pagination)
            var totalCount = _dbContext.Applications
                .Where(a => a.User.Id == _user.Id)
                .Count();

            // Fetch the paginated applications
            var applications = _dbContext.Applications
                .Where(a => a.User.Id == _user.Id)
                .Skip(skip)
                .Take(limit)
                .Select(a => (Application)a) 
                .ToList();

            return (applications, totalCount);
        }


        // Creates a new job application in the database
        public Application CreateApplication(Application application)
        {
            if (_user == null)
            {
                throw new InvalidOperationException("User must be set.");
            }

            var user = _dbContext.Users.FirstOrDefault(u => u.Id == _user.Id);

            if (user == null)
            {
                throw new InvalidOperationException("User not found.");
            }

           
            var dbApplication = new JobTrackr.DB.Model.Application
            {
                Company = application.Company,
                Position = application.Position,
                City = application.City,
                Date = application.Date,
                JobType = application.JobType,
                JobStatus = application.JobStatus,

                // Associate the application with the current user (set the full User object)
                User = user 
            };

            // Add the new application to the DbContext and save changes
            _dbContext.Add(dbApplication);
            _dbContext.SaveChanges();

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