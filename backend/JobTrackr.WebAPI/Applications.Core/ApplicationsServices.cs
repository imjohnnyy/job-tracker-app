using Applications.Core.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;


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
        public Application CreateApplication(JobTrackr.DB.Model.Application application)
        {
            application.User = _user;
            _dbContext.Add(application);
            _dbContext.SaveChanges();

            return (Application)application;
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