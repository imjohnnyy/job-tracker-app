using Applications.Core;
using Applications.Core.DTO;
using Applications.Core.UserExceptions;
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

        [HttpPut]
        public IActionResult UpdateProfile(Profile profile)
        {
            try
            {
                var updatedProfile = _profileServices.UpdateProfile(profile);

                return Ok(updatedProfile);
            }
            catch (DuplicateEmailException ex)
            {
                // Email already exists, return 409 Conflict
                return Conflict(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An unexpected error occurred.", details = ex.Message });
            }
        }

    }
}
