using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.AdvanceValidations
{
    public class CreateAdvanceValidator : AbstractValidator<CreateAdvanceDTO>
    {


        public CreateAdvanceValidator(Employee employee)
        {
            RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama alanı boş geçilemez.");
            RuleFor(x => x.Description).MaximumLength(250).WithMessage("En fazla 250 karakter girebilirsiniz");

            RuleFor(x => x.Amount).LessThan(x=> IsAdvanceType(x.AdvanceType) ? employee.Salary *3 : 500000).WithMessage(x => IsAdvanceType(x.AdvanceType) ? "Maaşınızın 3 katı kadar avans isteyebilirsiniz" : "Kurumsal avans isteklerinde en fazla 500.000 avans isteyebilirsiniz");

            RuleFor(x => x.Amount).GreaterThan(0).WithMessage("Miktarı alanı boş geçilemez");

        }


        public bool IsAdvanceType(AdvanceType advanceType)
        {
            if(advanceType == AdvanceType.Individual)
            {
                return true;
            }
            else
            {
                return false;
            }

        }



    }
}
