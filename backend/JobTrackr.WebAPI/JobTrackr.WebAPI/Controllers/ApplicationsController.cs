using Applications.Core;
using Applications.Core.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// This Applications API Controller handles job applications operations through HTTP requests.


namespace JobTrackr.WebAPI.Controllers
{
    // This [Authorize] attribute only allow valid users who are authenticated (with a JWT token)
    // to access these actions below. Otherwise, the will receive a 401 status code (Unauthorized).
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

        // Retrieves all job applications
        [HttpGet]
        public IActionResult GetApplications()
        {
            return Ok(_applicationsServices.GetApplications());
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
            return CreatedAtRoute("GetApplication", new { newApplication.Id }, newApplication);
        }

        // Deletes an job application
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