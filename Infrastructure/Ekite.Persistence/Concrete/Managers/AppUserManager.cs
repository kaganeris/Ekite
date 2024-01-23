using Ekite.Application.DTOs.AppUserDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Ekite.Persistence.Concrete.Managers
{
    public class AppUserManager : IAppUserService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IAppUserRepository appUserRepository;

        public AppUserManager(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IAppUserRepository appUserRepository)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            this.appUserRepository = appUserRepository;
        }

        public async Task<int> GetIDByRole(string appuserId, string roleName)
        {
            AppUser appUser = await _userManager.FindByIdAsync(appuserId);
            if (appUser == null)
            {
                return 0;
            }
            else
            {


                if (roleName == "Admin")
                {
                    UserDTO userDto = await appUserRepository.GetFilteredFirstOrDefault(
                         select: x => new UserDTO
                         {
                             Id = x.Director.Id
                         },
                         where: x => x.Id == appuserId,
                         include: x => x.Include(x => x.Director)
                         );
                    return userDto.Id;
                }
                else if (roleName == "Employee")
                {
                    UserDTO userDto = await appUserRepository.GetFilteredFirstOrDefault(
                        select: x => new UserDTO
                        {
                            Id = x.Employee.Id
                        },
                        where: x => x.Id == appuserId,
                        include: x => x.Include(x => x.Employee)
                        );
                    return userDto.Id;
                }
                else
                {
                    return 1;
                }
            }
        }

        public async Task<IdentityResult> HandleNewPassword(NewPasswordEmployeeDto newPasswordEmployeeDto)
        {

            if (newPasswordEmployeeDto == null)
            {
                return IdentityResult.Failed();
            }
            else
            {

                AppUser appUser = await _userManager.FindByIdAsync(newPasswordEmployeeDto.AppUserID);

                //appUser.PasswordHash = _userManager.PasswordHasher.HashPassword(appUser, newPasswordEmployeeDto.Password);
                //IdentityResult result = await _userManager.UpdateAsync(appUser);

                IdentityResult result =  await  _userManager.ResetPasswordAsync(appUser, await _userManager.GeneratePasswordResetTokenAsync(appUser), newPasswordEmployeeDto.Password);

                return result;
            }


        }

        public async Task<bool> IsRenewCodeCheck(CodeEmployeeDto codeEmployeeDto)
        {

            try
            {
                if (codeEmployeeDto != null)
                {
                    AppUser appUser = await _userManager.FindByIdAsync(codeEmployeeDto.AppUserID);

                    if (appUser == null)
                    {
                        return false;
                    }
                    else if (appUser.RenewPasswordCode.ToString() == codeEmployeeDto.Code)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }

                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                return false;
            }


        }

        public async Task<SignInResult> Login(LoginDTO model)
        {
            AppUser userLogin = await _userManager.FindByEmailAsync(model.Email);

            if (userLogin != null)
            {
                return await _signInManager.CheckPasswordSignInAsync(userLogin, model.Password, false);
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

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(appUser, "Employee");
            }

            return result;
        }

        public async Task<string> SendRenewPasswordCode(string email)
        {
            if (email == null)
            {
                return null;
            }
            else
            {
                AppUser appUser = await _userManager.FindByEmailAsync(email);
                if (appUser != null)
                {
                    Random random = new Random();
                    int code = random.Next(100000, 1000000);

                    appUser.RenewPasswordCode = code;

                    IdentityResult result = await _userManager.UpdateAsync(appUser);
                    if (result.Succeeded)
                    {
                        MailHelper.Send(email, code);
                    }

                    return appUser.Id;
                }
                else
                {
                    return null;
                }
            }
        }
    }
}
