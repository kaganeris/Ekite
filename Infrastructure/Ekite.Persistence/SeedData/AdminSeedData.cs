using Ekite.Domain.Entities;
using Ekite.Persistence.Context;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.SeedData
{
    public class AdminSeedData
    {

        public static async void Seed(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, AppDbContext _context)
        {


            if (!_context.Users.Any(u => u.UserName == "eren.colk@bilgeadam.com"))
            {

                AppUser user = new AppUser
                {
                    UserName = "admin",
                    Email = "eren.colk@bilgeadam.com",
                    EmailConfirmed = true,
                    CreatedDate = DateTime.Now,
                    Status = Domain.Enums.Status.Active
                };

                userManager.CreateAsync(user, "Eren12345.").Wait();

                AppUser createdUser = await userManager.FindByNameAsync("admin");

                IdentityRole adminRole = await roleManager.FindByNameAsync("Admin");

                await userManager.AddToRoleAsync(createdUser, adminRole.Name);
            }

            
        }

    }
}
