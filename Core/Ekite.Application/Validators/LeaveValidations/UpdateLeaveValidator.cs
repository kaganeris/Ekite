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
            RuleFor(x => x.LeaveType).NotNull().WithMessage("İzin türü boş geçilemez");
            RuleFor(x => x.LeaveStartDate).NotNull().WithMessage("İzin başlangıç tarihi boş geçilemez");
            RuleFor(x => x.LeaveEndDate).NotNull().WithMessage("İzin bitiş tarihi boş geçilemez");
        }
    }
}
