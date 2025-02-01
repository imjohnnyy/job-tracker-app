using Applications.Core;
using Applications.Core.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobTrackr.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        private IProfileServices _profileServices;

        public ProfileController(IProfileServices profileServices)
        {
            _profileServices = profileServices;
        }

        // Retrieves a specific profile
        [HttpGet("{email}", Name = "GetProfile")]
        public IActionResult GetProfile(string email)
        {
            return Ok(_profileServices.GetProfile(email));
        }

        // Updates the profile data
        [HttpPut]
        public IActionResult UpdateProfile(Profile profile)
        {
            return Ok(_profileServices.UpdateProfile(profile));
        }
    }
}
