using Applications.Core;
using Applications.Core.UserExceptions;
using JobTrackr.DB.Model;
using Microsoft.AspNetCore.Mvc;

// This Authentication API Controller handles user authentication operations - sign in and sign up.

namespace JobTrackr.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
        
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        // The '/signup' API Endpoint
        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(User user)
        {
            try
            {
                var result = await _userService.SignUp(user);
                return Created("", result);
            }
            catch (DuplicateUsernameException ex)
            {
                return StatusCode(409, ex.Message);
            }
        }

        // The '/signin' API Endpoint
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(User user)
        {
            try
            {
                var result = await _userService.SignIn(user);  
                return Ok(result);
            } 
            catch (InvalidCredentialsException ex)
            {
                return StatusCode(401, ex.Message);
            }
        }
    }
}
