using JobTrackr.DB.Model;
using Microsoft.EntityFrameworkCore;


namespace JobTrackr.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Application> Applications { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
