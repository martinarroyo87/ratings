using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ratings.Data
{
    public class ratingsContext : DbContext
    {
        public ratingsContext()
        { }
        public ratingsContext(DbContextOptions<ratingsContext> options) : base(options)
        {
            
        }
        public DbSet<Usuario> Usuarios { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Usuario>().ToTable("Usuarios");
              
        }
    }
}
