using Ekite.Application.AutoMapper;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Persistence.Concrete.Managers;
using Ekite.Persistence.Concrete.Repositories;
using Ekite.Persistence.Context;
using Ekite.Persistence.Migrations;
using Ekite.Persistence.SeedData;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Ekite.Presentation.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.

			//MAPPER
			builder.Services.AddAutoMapper(typeof(Mapping));

			builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("conStr")));

            builder.Services.AddIdentity<AppUser,IdentityRole>(opts =>
            {
                opts.User.RequireUniqueEmail = true;            
               
            }).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();




            var jwtSettings = builder.Configuration.GetSection("JwtSettings");

            var secretKey = jwtSettings["secretKey"];

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {

                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = jwtSettings["validIssuer"],
                    ValidAudience = jwtSettings["validAudience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
                };

            });

            //REPOSÝTORÝES
            builder.Services.AddTransient(typeof(IBaseRepository<>),typeof(BaseRepository<>));
            builder.Services.AddTransient<IEmployeeRepository, EmployeeRepository>();
            builder.Services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            builder.Services.AddTransient<IJobRepository,JobRepository>();
            builder.Services.AddTransient<ICompanyRepository, CompanyRepository>();
            builder.Services.AddTransient<IAppUserRepository, AppUserRepository>();

            //MANAGERS
            builder.Services.AddTransient<IEmployeeService, EmployeeManager>();
            builder.Services.AddTransient<IDepartmentService,DepartmentManager >();
            builder.Services.AddTransient<IJobService,JobManager >();
            builder.Services.AddTransient<ICompanyService,CompanyManager >();
            builder.Services.AddTransient<IAppUserService,AppUserManager>();



    


            builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles); 
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:5173") // Ýzin vermek istediðiniz kaynak
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    });
            });

            var app = builder.Build();


            //SEEDDATA ADMÝN 
            var serviceScope = app.Services.CreateScope();
            AppDbContext _context = serviceScope.ServiceProvider.GetService<AppDbContext>()!;
            UserManager<AppUser> userManager = serviceScope.ServiceProvider.GetService<UserManager<AppUser>>()!;
            RoleManager<IdentityRole> roleManager = serviceScope.ServiceProvider.GetService<RoleManager<IdentityRole>>()!;

            AdminSeedData.Seed(userManager, roleManager, _context);



            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("AllowSpecificOrigin");
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
