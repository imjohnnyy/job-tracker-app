

namespace Applications.Core
{
    public interface IStatisticsServices
    {
        IEnumerable<KeyValuePair<string, double>> GetApplicationsPerCategory();
    }
}
