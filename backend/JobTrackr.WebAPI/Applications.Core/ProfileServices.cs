using Applications.Core.DTO;
using Applications.Core.UserExceptions;
using Microsoft.AspNetCore.Http;


namespace Applications.Core
{
    public class ProfileServices : IProfileServices
    {
        private readonly JobTrackr.DB.AppDbContext _dbContext;
        private readonly JobTrackr.DB.Model.User _user;

        public ProfileServices(JobTrackr.DB.AppDbContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _user = _dbContext.Users
                 .First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);
        }
        public Profile GetProfile(string email) =>
            _dbContext.Users
                .Where(u => u.Email == email) // Find the user with the given email
                .Select(u => new Profile
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    Email = u.Email
                })
                .FirstOrDefault(); // Return the Profile object (or null if not found)



        public Profile UpdateProfile(Profile profile)
        {
            var dbUser = _dbContext.Users.FirstOrDefault(u => u.Id == _user.Id && u.Id == profile.Id);

            // Check if another user already has the same email
            var existingEmailUser = _dbContext.Users
                .FirstOrDefault(u => u.Email == profile.Email && u.Id != profile.Id);

            // If another user has this email, throw an exception
            if (existingEmailUser != null)
            {
                throw new DuplicateEmailException("This email address is already taken!");
            }

            dbUser.FirstName = profile.FirstName;
            dbUser.LastName = profile.LastName;
            dbUser.Email = profile.Email;

            _dbContext.SaveChanges();

            return profile;
        }
    }
}
