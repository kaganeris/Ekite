using Ekite.Application.DTOs.AdvanceDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.AdvanceValidations
{
    public class UpdateAdvanceValidator : AbstractValidator<UpdateAdvanceDTO>
    {

        public UpdateAdvanceValidator()
        {
            RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama alanı boş geçilemez.");
            RuleFor(x => x.Description).MaximumLength(250).WithMessage("En fazla 250 karakter girebilirsiniz");

            RuleFor(x => x.Amount).LessThan(100000).WithMessage("Miktarı çok fazla girdiniz.");
            RuleFor(x => x.Amount).GreaterThan(0).WithMessage("Miktarı alanı boş geçilemez");

        }

    }
}
