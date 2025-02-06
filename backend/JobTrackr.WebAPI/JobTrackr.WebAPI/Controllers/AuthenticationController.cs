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
                // Attempt to sign up the user
                var result = await _userService.SignUp(user);
                
                // If signup is successful, return a 201 Created response
                return Created("", result); 
            }
            catch (DuplicateUsernameException ex)
            {
                // Username already exists, return 409 Conflict
                return Conflict(new { message = ex.Message });
            }
            catch (DuplicateEmailException ex)
            {
                // Email already exists, return 409 Conflict
                return Conflict(new { message = ex.Message });
            }
            catch (InvalidCredentialsException ex)
            {
                // Missing required fields, return 400 Bad Request
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                // Catch any other unhandled exceptions and return a 500 Internal Server Error
                return StatusCode(500, new { message = "An unexpected error occurred.", details = ex.Message });
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
