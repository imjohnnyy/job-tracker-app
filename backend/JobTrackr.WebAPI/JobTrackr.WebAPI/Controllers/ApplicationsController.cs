using Applications.Core;
using Microsoft.AspNetCore.Mvc;

namespace JobTrackr.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApplicationsController : ControllerBase
    {
        private IApplicationsServices _applicationsServices;

        public ApplicationsController(IApplicationsServices applicationsServices)
        {
            _applicationsServices = applicationsServices;
        }

        [HttpGet]
        public IActionResult GetApplications()
        {
            return Ok(_applicationsServices.GetApplications());
        }


    }
}