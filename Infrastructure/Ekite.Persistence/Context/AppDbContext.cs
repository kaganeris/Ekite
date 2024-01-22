using Ekite.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Context
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {


        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Spend> Spends { get; set; }
        public DbSet<Leave> Leaves { get; set; }
        public DbSet<Advance> Advances { get; set; }
        public DbSet<Director> Directors { get; set; }
        public DbSet<SiteOwner> SiteOwners { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(builder);
        }

    }
}
