using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Domain.Entities;
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

        public CreateAdvanceValidator()
        {
            RuleFor(x=>x.Description).NotEmpty();
            

        }

    }
}
