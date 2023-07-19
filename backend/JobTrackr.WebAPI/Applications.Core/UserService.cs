using Applications.Core.DTO;
using Applications.Core.UserExceptions;
using Applications.Core.Utilities;
using JobTrackr.DB;
using JobTrackr.DB.Model;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Core
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _dbContext;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(AppDbContext context, IPasswordHasher passwordHasher)
        {
            _dbContext = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<AuthenticatedUser> SignIn(User user)
        {
            var dbUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            if (dbUser == null || _passwordHasher.VerifyHashedPassword(dbUser.Password, user.Password) == PasswordVerificationResult.Failed)
            {
                throw new InvalidCredentialsException("Invalid username or password!");
            }

            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JWTGenerator.GenerateUserToken(user.Username),
            };
        }

        public async Task<AuthenticatedUser> SignUp(User user)
        {
            var verifyUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            if (verifyUser != null)
            {
                throw new DuplicateUsernameException("This username already exists!");
            }

            user.Password = _passwordHasher.HashPassword(user.Password);
            await _dbContext.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JWTGenerator.GenerateUserToken(user.Username),
            };
        }
    }
}
