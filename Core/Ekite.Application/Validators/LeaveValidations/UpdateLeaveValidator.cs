using Ekite.Application.DTOs.LeaveDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.LeaveValidations
{
    public class UpdateLeaveValidator : AbstractValidator<UpdateLeaveDTO>
    {
        public UpdateLeaveValidator()
        {
            RuleFor(x => x.LeaveType).NotEmpty().WithMessage("İzin türü boş geçilemez");
            // TODO DOLDURULACAK
        }
    }
}
