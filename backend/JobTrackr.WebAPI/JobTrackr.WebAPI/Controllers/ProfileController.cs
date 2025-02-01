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

        // Updates the profile data
        [HttpPut]
        public IActionResult UpdateProfile(Profile profile)
        {
            return Ok(_profileServices.UpdateProfile(profile));
        }
    }
}
