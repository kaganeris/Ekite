using Ekite.Application.DTOs.AppUserDto;
using Ekite.Application.Interfaces.Services;
using Ekite.Application.Validators.AppUserValidations;
using Ekite.Domain.Entities;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAppUserService _appUserService;
        private readonly IConfiguration _configuration;
        private readonly UserManager<AppUser> _userManager;
        private readonly IEmployeeService employeeService;

        public AuthController(IAppUserService appUserService, IConfiguration configuration, UserManager<AppUser> userManager,IEmployeeService employeeService)

        {
            _appUserService = appUserService;
            _configuration = configuration;
            _userManager = userManager;
            this.employeeService = employeeService;
        }

        [HttpPost]
        [Route("[action]")]
        [Authorize(AuthenticationSchemes = "Admin,Employee")]
        public async Task<IActionResult> Register(RegisterDTO registerDTO)
        {
            IdentityResult result = await _appUserService.Register(registerDTO);

            if (result.Succeeded)
            {
                return Ok();

            }
            else
            {
                return BadRequest();

            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {
            LoginDTOValidator validationRules = new LoginDTOValidator();
            ValidationResult valid = validationRules.Validate(loginDTO);
            if (valid.IsValid)
            {
                Microsoft.AspNetCore.Identity.SignInResult result = await _appUserService.Login(loginDTO);


                AppUser appUser = await _userManager.FindByEmailAsync(loginDTO.Email);
                var role = await _userManager.GetRolesAsync(appUser);

                if (result.Succeeded)
                {
                    //int employeeId = await employeeService.GetEmployeeIdByUserId(appUser.Id);

                    int id = await _appUserService.GetIDByRole(appUser.Id, role.FirstOrDefault());


                    var authClaims = new List<Claim>
                {

                   new Claim (ClaimTypes.Role, role.FirstOrDefault()),
                   new Claim (JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
                };

                    var token = GetToken(authClaims);

                    return Ok(new
                    {

                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        role = role.FirstOrDefault(),
                        id = id,
                    });
                }
                else
                {
                    return Unauthorized("E-mail veya şifre hatalı!");
                }
            }
            else
            {
                List<string> errors = new List<string>();
                foreach (var item in valid.Errors)
                {
                    errors.Add(item.ErrorMessage);
                }
                return BadRequest(error:errors);
            }
           
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:secretKey"]));

            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["JwtSettings:validIssuer"],
                _configuration["JwtSettings:validAudience"],
                authClaims,

                expires: DateTime.Now.AddDays(10),

                signingCredentials: signIn
                
                );

            return token;


        }
    }
}
