using Applications.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobTrackr.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("statistics")] // "Drops the 'controller' in 'StatistcsController', meaning our route becomes '{PORT Number}/Statistics'.
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
