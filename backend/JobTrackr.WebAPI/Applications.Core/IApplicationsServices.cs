using JobTrackr.DB.Model;

namespace Applications.Core
{
    public interface IApplicationsServices
    {
        List<Application> GetApplications();
    }
}
