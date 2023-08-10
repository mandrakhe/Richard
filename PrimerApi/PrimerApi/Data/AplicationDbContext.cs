using API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace API.Data
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
    }

}