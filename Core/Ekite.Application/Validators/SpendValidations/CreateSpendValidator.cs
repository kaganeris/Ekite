using Ekite.Application.DTOs.SpendDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators.SpendValidations
{
	public class CreateSpendValidator  : AbstractValidator<CreateSpendDto>
	{
        public CreateSpendValidator()
        {
			RuleFor(x => x.Description).NotNull().NotEmpty().WithMessage("Açıklama Bölümü Boş Geçilemez!");

			RuleFor(x => x.Currency).NotEmpty().NotNull().WithMessage("Para Birimi Boş Geçilemez!");



			RuleFor(x => x.Amount).NotEmpty().NotNull().WithMessage("Harcama Limiti Boş Geçilemez!").LessThan(100000).WithMessage("Bu kadar harcama yapılamaz!").GreaterThan(0).WithMessage("Lütfen geçerli bir sayı giriniz!");
		}
    }
}
