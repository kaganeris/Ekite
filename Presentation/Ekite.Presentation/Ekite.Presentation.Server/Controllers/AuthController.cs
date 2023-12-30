using Ekite.Application.DTOs.AppUserDto;
using Ekite.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public AuthController(IAppUserService appUserService, IConfiguration configuration)
        {
            _appUserService = appUserService;
            _configuration = configuration;
        }



        [HttpPost]
        [Route("[action]")]
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
            Microsoft.AspNetCore.Identity.SignInResult result = await _appUserService.Login(loginDTO);

            if (result.Succeeded)
            {
                var authClaims = new List<Claim>
                {
                   new Claim (ClaimTypes.Email,loginDTO.Email),
                   new Claim (JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())

                };

                var token = GetToken(authClaims);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            else
            {
                return Unauthorized();
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
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: signIn

                );

            return token;


        }
    }
}
