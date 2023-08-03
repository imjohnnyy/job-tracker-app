using Applications.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobTrackr.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("statistics")] // The route becomes '{PORT Number}/statistics'.
    public class StatisticsController : ControllerBase
    {
        private readonly IStatisticsServices _statisticsServices;

        public StatisticsController(IStatisticsServices statisticsServices)
        {
            _statisticsServices = statisticsServices;
        }

        [HttpGet]
        public IActionResult GetApplicationsPerCategory()
        {
            return Ok(_statisticsServices.GetApplicationsPerCategory());
        }
    }
}
