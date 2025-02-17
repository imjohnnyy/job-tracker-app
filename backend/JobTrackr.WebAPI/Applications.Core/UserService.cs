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
            if (string.IsNullOrWhiteSpace(user?.Username) || string.IsNullOrWhiteSpace(user?.Password))
            {
                throw new InvalidCredentialsException("Username and password are required!");
            }

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
                Email = dbUser.Email
            };
        }

        public async Task<AuthenticatedUser> SignUp(User user)
        {
            // Check if a user with the same username already exists in the database.
            var verifyUsername = await _dbContext.Users
                .FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            // If the username already exists then the 'DuplicateUsernameException' is thrown.
            if (verifyUsername != null)
            {
                throw new DuplicateUsernameException("This username already exists!");
            }

            // Check if a user with the same email already exists in the database.
            var verifyEmail = await _dbContext.Users
                .FirstOrDefaultAsync(u => u.Email.Equals(user.Email));

            // If the email already exists, throw a 'DuplicateEmailException'.
            if (verifyEmail != null)
            {
                throw new DuplicateEmailException("This email address is already taken!");
            }

            // Hash the user's password before storing it in the database.
            user.Password = _passwordHasher.HashPassword(user.Password);
            user.FirstName = user.FirstName;
            user.LastName = user.LastName;

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
