
using JobTrackr.DB.Model;
using Microsoft.EntityFrameworkCore;

// The Database Context that inherits from DbContext which allows us to interact
// with our SQL Server Database using Entity Framework.

namespace JobTrackr.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        // 'Application' and 'Users' are entities that maps to the respective tables in the SQL Server database.
        // (Which allows us to execute databse operations with Entity Framework).
        public DbSet<Application> Applications { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
