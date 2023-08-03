﻿using System.ComponentModel.DataAnnotations;

// Defines the User entity in the SQL database.

namespace JobTrackr.DB.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }


    }
}
