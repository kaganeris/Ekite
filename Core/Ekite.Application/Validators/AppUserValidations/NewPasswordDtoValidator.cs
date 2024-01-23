using Ekite.Application.DTOs.EmployeeDto;
using FluentValidation;
using FluentValidation.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.AppUserValidations
{
    public class NewPasswordDtoValidator : AbstractValidator<NewPasswordEmployeeDto>
    {


        public NewPasswordDtoValidator()
        {

            RuleFor(x => x.ConfirmPassword).Equal(y => y.Password).WithMessage("Parolalarınız eşleşmiyor");

        }

    }
}
