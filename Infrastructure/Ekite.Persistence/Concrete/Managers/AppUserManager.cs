using Ekite.Application.DTOs.AppUserDto;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Ekite.Persistence.Concrete.Managers
{
    public class AppUserManager : IAppUserService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AppUserManager(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<SignInResult> Login(LoginDTO model)
        {
            AppUser userLogin = await _userManager.FindByEmailAsync(model.Email);
            
            if(userLogin != null)
            {
                return await _signInManager.CheckPasswordSignInAsync(userLogin,model.Password,false);
            }
            else
            {
                return SignInResult.Failed;
            }

            
        }

        public async Task<IdentityResult> Register(RegisterDTO model)
        {
            AppUser appUser = new AppUser()
            {
               Email = model.Email,
               UserName = model.Email
            };

            IdentityResult result = await _userManager.CreateAsync(appUser, model.Password);

            if(result.Succeeded)
            {

            }

            return result;
        }
    }
}
