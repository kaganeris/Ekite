using Ekite.Application.DTOs.AppUserDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.AppUserValidations
{
    public class LoginDTOValidator : AbstractValidator<LoginDTO>
    {
        public LoginDTOValidator()
        {
            RuleFor(x => x.Email).NotEmpty().NotNull().WithMessage("Lütfen Mail Adresinizi Giriniz!").EmailAddress().WithMessage("Lütfen Geçerli Bir Mail Adresi Girin!");
            RuleFor(x => x.Password).NotEmpty().NotNull().WithMessage("Lütfen Şifrenizi Giriniz!");
        }
    }
}
