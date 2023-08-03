namespace Applications.Core.DTO

// This "AuthenticatedUser" class serves as a Data Transfer Object that holds data related to an authenticated user.

{
    public class AuthenticatedUser
    {
        public string Token { get; set; }
        public string Username { get; set; }    
    }
}
