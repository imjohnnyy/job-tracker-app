using Applications.Core.DTO;

namespace Applications.Core
{
    public interface IApplicationsServices
    {
        // Retrieves a list of all job applications
        List<Application> GetApplications();

        // Retrieves a specific job application
        Application GetApplication(int id);

        // Creates a new job application
        Application CreateApplication(JobTrackr.DB.Model.Application application);

        // Deletes an existing job application
        void DeleteApplication(Application application);

        // Updates an existing job application
        Application EditApplication(Application application);
    }
}
