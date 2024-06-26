﻿using Ekite.Application.Interfaces.Services;
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
            if (!_context.Users.Any(u => u.UserName == "admin"))
            {
                AppUser user = new AppUser
                {
                    UserName = "admin",
                    Email = "eren.colk@bilgeadam.com",
                    EmailConfirmed = true,
                    CreatedDate = DateTime.Now,
                    Status = Domain.Enums.Status.Active,
                    FirstLogin = false
                };

                IdentityResult adminResult = await userManager.CreateAsync(user, "Eren12345.");

                IdentityRole adminRole = new IdentityRole();
                adminRole.Name = "Admin";

                await roleManager.CreateAsync(adminRole);

                AppUser createdUser = await userManager.FindByNameAsync("admin");

                await userManager.AddToRoleAsync(createdUser, adminRole.Name);

				Director adminDirector = new Director
				{
					FirstName = "Eren",
					LastName = "ÇOLAK",
					TCNO = "12345678912",
					PhoneNumber = "05069232107",
					AppUserId = user.Id,
					BirthDate = Convert.ToDateTime("1992/01/01"),
					City = "İstanbul",
					ImagePath = "https://randomuser.me/api/portraits/men/77.jpg",
					BirthPlace = "ISTANBUL",
					CompanyId = 1,
                    DepartmentId = 1,
                    JobId = 1,
					District = "Kadıköy",
					Status = Status.Active,
					AddressDetail = "Kırmızı Caddesi 124",
					CreatedDate = DateTime.Now
				};
				_context.Directors.Add(adminDirector);


                AppUser owner = new AppUser
                {
                    UserName = "owner",
                    Email = "kagan.ers@bilgeadam.com",
                    EmailConfirmed = true,
                    CreatedDate = DateTime.Now,
                    Status = Domain.Enums.Status.Active,
                    FirstLogin = false

                };

                IdentityResult ownerResult = await userManager.CreateAsync(owner, "Kagan12345.");

                IdentityRole ownerRole = new IdentityRole();
                ownerRole.Name = "SiteOwner";

                await roleManager.CreateAsync(ownerRole);

                AppUser createdOwner = await userManager.FindByNameAsync("owner");

                await userManager.AddToRoleAsync(createdOwner, ownerRole.Name);

                SiteOwner siteOwner = new SiteOwner
                {
                    FirstName = "Kağan",
                    LastName = "ERİŞ",
                    TCNO = "12345678912",
                    PhoneNumber = "05443665412",
                    AppUserId = owner.Id,
                    BirthDate = Convert.ToDateTime("1998/07/12"),
                    City = "Aydın",
                    ImagePath = "https://randomuser.me/api/portraits/men/9.jpg",
                    BirthPlace = "ANKARA",
                    JobId = 1,
                    District = "Efeler",
                    Status = Status.Active,
                    AddressDetail = "Mavi Caddesi 124",
                    CreatedDate = DateTime.Now
                };
                _context.SiteOwners.Add(siteOwner);


                AppUser appUser = new AppUser
                {
                    CreatedDate = DateTime.Now,
                    Email = "ali@bilgeadam.com",
                    UserName = "ali",
                    PhoneNumber = "1234567890",
                    Status = Status.Active,
                    EmailConfirmed = true,
                    LockoutEnabled = true,
                    TwoFactorEnabled = false,
                    PhoneNumberConfirmed = false,
                    FirstLogin = false


                };

                AppUser app1 = new AppUser
                {
                    CreatedDate = DateTime.Now,
                    Email = "mehmet@bilgeadam.com",
                    UserName = "mehmet",
                    PhoneNumber = "1234567890",
                    Status = Status.Active,
                    EmailConfirmed = true,
                    LockoutEnabled = true,
                    TwoFactorEnabled = false,
                    PhoneNumberConfirmed = false,
                    FirstLogin = false


                };
               
                IdentityResult result = await userManager.CreateAsync(appUser, "Ali12345.");
                IdentityResult result2 = await userManager.CreateAsync(app1, "Mehmet12345.");
                if (result.Succeeded)
                {
                    IdentityRole employee1Role = new IdentityRole();
                    employee1Role.Name = "Employee";

                    await roleManager.CreateAsync(employee1Role);

                    await userManager.AddToRoleAsync(appUser, employee1Role.Name);

                    Employee emp = new Employee
                    {
                        FirstName = "Ali",
                        LastName = "YILMAZ",
                        JobId = 1,
                        TCNO = "12345678910",
                        PhoneNumber = "05069232105",
                        AppUserId = appUser.Id,
                        BirthDate = Convert.ToDateTime("1990/01/01"),
                        City = "Adana",
                        BirthPlace = "OSMANİYE",
                        ImagePath = "https://randomuser.me/api/portraits/men/66.jpg",
                        CompanyId = 1,
                        DepartmentId = 1,
                        District = "Seyhan",
                        HireDate = DateTime.Now,
                        Status = Status.Active,
                        Salary = 55500m,
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
                        AppUserId = app1.Id,
                        BirthDate = Convert.ToDateTime("1995/01/01"),
                        City = "Mersin",
                        ImagePath = "https://randomuser.me/api/portraits/men/86.jpg",
                        BirthPlace = "ANTALYA",
                        CompanyId = 1,
                        DepartmentId = 2,
                        District = "mezitli",
                        HireDate = DateTime.Now,
                        Status = Status.Active,
                        Salary = 45500m,
                        AddressDetail = "Fenerbahçe Meydanı 190 sk",
                        CreatedDate = DateTime.Now
                    };
                    _context.Employees.Add(emp1);
                }
                _context.SaveChanges();
            }
        }

    }
}
