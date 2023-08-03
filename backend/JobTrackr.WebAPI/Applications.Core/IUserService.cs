using Applications.Core.DTO;
using JobTrackr.DB.Model;


namespace Applications.Core
{
    public  interface IUserService
    {
        // Handles user sign-up operation.
        Task<AuthenticatedUser> SignUp(User user);

        // Handles user sign-in operation.
        Task<AuthenticatedUser> SignIn(User user);
    }
}
