using Applications.Core;
using Applications.Core.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobTrackr.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ApplicationsController : ControllerBase
    {
        private IApplicationsServices _applicationsServices;

        public ApplicationsController(IApplicationsServices applicationsServices)
        {
            _applicationsServices = applicationsServices;
        }

        // Retrieves all job applications with pagination
        [HttpGet]
        public IActionResult GetApplications([FromQuery] int page = 1, [FromQuery] int limit = 10)
        {
            // Get the paginated applications from the service
            var (applications, totalCount) = _applicationsServices.GetApplications(page, limit);

            // Return the applications and total count
            return Ok(new { Applications = applications, TotalCount = totalCount });
        }

        // Retrieves a specific job application
        [HttpGet("{id}", Name = "GetApplication")]
        public IActionResult GetApplication(int id)
        {
            return Ok(_applicationsServices.GetApplication(id));
        }

        // Creates a new job application
        [HttpPost]
        public IActionResult CreateApplication(Application application)
        {
            var newApplication = _applicationsServices.CreateApplication(application);
            return CreatedAtRoute("GetApplication", new { id = newApplication.Id }, newApplication);
        }

        // Deletes a job application
        [HttpDelete]
        public IActionResult DeleteApplication(Application application)
        {
            _applicationsServices.DeleteApplication(application);
            return Ok();
        }

        // Updates an existing job application
        [HttpPut]
        public IActionResult EditApplication(Application application)
        {
            return Ok(_applicationsServices.EditApplication(application));
        }
    }
}
