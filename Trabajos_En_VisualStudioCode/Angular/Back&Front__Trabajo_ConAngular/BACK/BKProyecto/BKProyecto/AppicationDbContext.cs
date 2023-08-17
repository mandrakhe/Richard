using BKProyecto.models;
using Microsoft.EntityFrameworkCore;

namespace BKProyecto
{
    public class AppicationDbContext : DbContext   

    {
        public AppicationDbContext(DbContextOptions<AppicationDbContext>options) : base (options)
        {
            
        }
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }
    }
}
