using Applications.Core.DTO;
using Applications.Core.UserExceptions;
using Applications.Core.Utilities;
using JobTrackr.DB;
using JobTrackr.DB.Model;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using System;

// Handles user authentication with password hashing and stores user data into the database.

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
            // Retrieve the user from the database based on the provided username.
            var dbUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            // Check if the user was found in the database or if the provided password doesn't match the hashed password.
            if (dbUser == null || _passwordHasher.VerifyHashedPassword(dbUser.Password, user.Password) == PasswordVerificationResult.Failed)
            {
                throw new InvalidCredentialsException("Invalid username or password!");
            }

            // Create an AuthenticatedUser with the user's username and a generated JWT token.
            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JWTGenerator.GenerateUserToken(user.Username),
            };
        }

        public async Task<AuthenticatedUser> SignUp(User user)
        {
            // Check if a user with the same username already exists in the database.
            var verifyUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            // If the username already exists then the 'DuplicateUsernameException' is thrown.
            if (verifyUser != null)
            {
                throw new DuplicateUsernameException("This username already exists!");
            }

            // Hash the user's password before storing it in the database.
            user.Password = _passwordHasher.HashPassword(user.Password);

            // Add user data and save changes to the database.
            await _dbContext.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            // Create an AuthenticatedUser with the user's username and a generated JWT token.
            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JWTGenerator.GenerateUserToken(user.Username),
            };
        }
    }
}
