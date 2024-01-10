using Ekite.Application.DTOs.SpendDto;
using Ekite.Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.SpendValidations
{
	public class UpdateSpendValidator : AbstractValidator<UpdateSpendDto>
	{
        public UpdateSpendValidator()
        {
			RuleFor(x => x.Amount).NotEmpty().NotNull().WithMessage("Harcama Limiti Boş Geçilemez!").LessThan(100000).WithMessage("Bu kadar harcama yapılamaz!");

			RuleFor(x => x.Currency).NotEmpty().NotNull().WithMessage("Para Birimi Boş Geçilemez!");

			RuleFor(x => x.Description).NotNull().NotEmpty().WithMessage("Açıklama Bölümü Boş Geçilemez!");


		}
    }
}
