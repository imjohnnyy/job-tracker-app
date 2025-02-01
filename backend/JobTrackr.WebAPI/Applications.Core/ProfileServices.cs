using Applications.Core.DTO;
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

        public Profile UpdateProfile(Profile profile)
        {
            var dbUser = _dbContext.Users.FirstOrDefault(u => u.Id == _user.Id && u.Id == profile.Id);


            dbUser.FirstName = profile.FirstName;
            dbUser.LastName = profile.LastName;
            dbUser.Email = profile.Email;

            _dbContext.SaveChanges();

            return profile;
        }
    }
}
