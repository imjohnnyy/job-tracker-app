using JobTrackr.DB;
using JobTrackr.DB.Model;

namespace Applications.Core
{
    public class ApplicationsServices : IApplicationsServices
    {
        private AppDbContext _dbContext;


        public ApplicationsServices(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Retrieves a specific job application by ID from the database
        public Application GetApplication(int id)
        {
            return _dbContext.Applications.First(a => a.Id == id);
        }

        // Retrieves a list of job applications from the database
        public List<Application> GetApplications()
        {
            return _dbContext.Applications.ToList();
        }

        // Creates a new job application in the database
        public Application CreateApplication(Application application)
        {
            _dbContext.Add(application);
            _dbContext.SaveChanges();

            return application;
        }

        // Deletes a job application from the database
        public void DeleteApplication(Application application)
        {
            _dbContext.Applications.Remove(application);
            _dbContext.SaveChanges();
        }

        // Updates an existing job application in the database
        public Application EditApplication(Application application)
        {
            var dbApplication = _dbContext.Applications.First(a => a.Id == application.Id);

            // Update the properties of the existing application with the new values
            dbApplication.Company = application.Company;
            dbApplication.Position = application.Position;
            dbApplication.City = application.City;
            dbApplication.Date = application.Date;
            dbApplication.JobType = application.JobType;
            dbApplication.JobStatus = application.JobStatus;

            _dbContext.SaveChanges();

            return dbApplication;
        }


    }
}