using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Concrete.Managers;
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

                AppUser appUser = new AppUser
                {
                    Id = "113FE8D8-DD1E-4B90-8DE4-1A087D5DEC75",
                    CreatedDate = DateTime.Now,
                    Email = "ali@gmail.com",
                    UserName = "ali",
                    PhoneNumber = "1234567890",
                    Status = Status.Active,
                    EmailConfirmed = false,
                    LockoutEnabled = true,
                    TwoFactorEnabled = false,
                    PhoneNumberConfirmed = false,

                };

                AppUser app1 = new AppUser
                {
                    Id = "04C13619-3039-42F3-9085-3752DCDB42B7",
                    CreatedDate = DateTime.Now,
                    Email = "mehmet@gmail.com",
                    UserName = "mehmet",
                    PhoneNumber = "1234567890",
                    Status = Status.Active,
                    EmailConfirmed = false,
                    LockoutEnabled = true,
                    TwoFactorEnabled = false,
                    PhoneNumberConfirmed = false,

                };




                if (_context.Users==null)
                {
					IdentityResult result = await userManager.CreateAsync(appUser, "Eren12345.");
					IdentityResult result2 = await userManager.CreateAsync(app1, "Eren12345.");
					if (result.Succeeded)
					{
						await userManager.AddToRoleAsync(appUser, "Employee");

						Employee emp = new Employee
						{
							FirstName = "Ali",
							LastName = "YILMAZ",
							JobId = 1,
							TCNO = "12345678910",
							PhoneNumber = "05069232105",
							AppUserId = "113FE8D8-DD1E-4B90-8DE4-1A087D5DEC75",
							BirthDate = DateTime.Now,
							City = "Adana",
							BirthPlace = "OSMANİYE",
							CompanyId = 1,
							DepartmentId = 1,
							District = "Seyhan",
							HireDate = DateTime.Now,
							Status = Status.Active,
							Salary = 55.500m,
							AddressDetail = "Mavi bulvar 72190 sk",
							CreatedDate = DateTime.Now
						};



						_context.Employees.Add(emp);

					}

					if (result2.Succeeded)
					{
						await userManager.AddToRoleAsync(app1, "Employee");

						Employee emp1 = new Employee
						{
							FirstName = "Mehmet",
							LastName = "UÇAR",
							JobId = 2,
							TCNO = "12345678910",
							PhoneNumber = "05069232105",
							AppUserId = "04C13619-3039-42F3-9085-3752DCDB42B7",
							BirthDate = DateTime.Now,
							City = "Mersin",
							BirthPlace = "ANTALYA",
							CompanyId = 1,
							DepartmentId = 2,
							District = "mezitli",
							HireDate = DateTime.Now,
							Status = Status.Active,
							Salary = 45.500m,
							AddressDetail = "Fenerbahçe Meydanı 190 sk",
							CreatedDate = DateTime.Now
						};
						_context.Employees.Add(emp1);


					}
				}

               

                _context.SaveChanges();



            }







        }

    }
}
