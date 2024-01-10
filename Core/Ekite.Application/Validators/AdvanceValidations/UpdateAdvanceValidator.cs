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
            RuleFor(x => x.Description).NotEmpty();

        }

    }
}
