using Ekite.Application.DTOs.AppUserDto;
using Ekite.Application.DTOs.EmployeeDto;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface IAppUserService
    {

        Task<IdentityResult> Register(RegisterDTO model);

        Task<SignInResult> Login(LoginDTO model);

        Task<int> GetIDByRole(string appuserId,string roleName);

        Task<string> SendRenewPasswordCode(string email);

        Task<bool> IsRenewCodeCheck(CodeEmployeeDto codeEmployeeDto);

        Task<IdentityResult> HandleNewPassword(NewPasswordEmployeeDto newPasswordEmployeeDto);
    }
}
