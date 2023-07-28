using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Core
{
    public class StatisticsServices : IStatisticsServices
    {
        private readonly JobTrackr.DB.AppDbContext _dbContext;
        private readonly JobTrackr.DB.Model.User _user;

        public StatisticsServices(JobTrackr.DB.AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = context;
            // Comparing username of user from database with username from JWT token (if they match then the user is set).
            _user = _dbContext.Users.First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);
        }

        // Retrieves the total count of job applications by each Job Status (e.g. Ongoing, Accepted, Rejected etc..)
        public IEnumerable<KeyValuePair<string, double>> GetApplicationsPerCategory()
        {
            var applications = _dbContext.Applications
                .Where(a => a.User.Id == _user.Id)
                .GroupBy(a => a.JobStatus)   // Grouping by JobStatus field
                .Select(group => new
                {
                    JobStatus = group.Key,
                    TotalCount = group.Count()
                })
                .ToList();

            var result = applications.ToDictionary(a => a.JobStatus, a => (double)a.TotalCount);

            return result;
        }

    }
}
