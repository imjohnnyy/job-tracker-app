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

        // Retrieve a list of job applications from the database
        public List<Application> GetApplications()
        {
            return _dbContext.Applications.ToList();
        }
    }
}