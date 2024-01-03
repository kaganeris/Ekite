using Ekite.Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Validators
{
	public class EmployeeValidator: AbstractValidator<Employee>
	{
		public EmployeeValidator()
		{
			RuleFor(x => x.FirstName).NotEmpty().NotNull().WithMessage("Lütfen Adınızı Giriniz!").MinimumLength(2).WithMessage("Lütfen Daha Uzun Bir Ad Giriniz!").MaximumLength(20).WithMessage("Bu Kadar Uzun Ad Olamaz!");

			RuleFor(x => x.LastName).NotEmpty().NotNull().WithMessage("Lütfen Soyadınızı Giriniz!").MinimumLength(2).WithMessage("Lütfen Daha Uzun Bir Soyad Giriniz!").MaximumLength(20).WithMessage("Bu Kadar Uzun Soyad Olamaz!");

			RuleFor(x => x.SecondName).MinimumLength(2).WithMessage("Lütfen Daha Uzun Bir Ad Giriniz!").MaximumLength(20).WithMessage("Bu Kadar Uzun Ad Olamaz!");

			RuleFor(x => x.SecondLastName).MinimumLength(2).WithMessage("Lütfen Daha Uzun Bir Ad Giriniz!").MaximumLength(20).WithMessage("Bu Kadar Uzun Ad Olamaz!");

			RuleFor(x => x.BirthDate).NotNull().NotEmpty().WithMessage("Doğum Tarihi Boş Geçilemez!").Must(ResitMi).WithMessage("18 Yaşından Küçükler Kayıt Olamaz!");

			RuleFor(x => x.TCNO).NotNull().NotEmpty().WithMessage("TC Kimlik Numarası Boş Geçilemez!").Length(11, 11).WithMessage("Lütfen Kimlik Numaranızı Doğru Formatta Giriniz!");

			RuleFor(x => x.BirthPlace).NotEmpty().NotNull().WithMessage("Doğum Yeri Boş Geçilemez").MinimumLength(1).WithMessage("Lütfen Doğum Yerinizi Giriniz!");

			RuleFor(x => x.HireDate).NotNull().NotEmpty().WithMessage("Lütfen İşe Giriş Tarihini Giriniz!");

			RuleFor(x => x.PhoneNumber).NotNull().NotEmpty().WithMessage("Lütfen Telefon Numaranızı Giriniz!").Matches("^[0-9]+$").WithMessage("Telefon Numaranız Sadece Sayısal Değer İçermeli");

			RuleFor(x => x.City).NotNull().NotEmpty().WithMessage("Şehir Alanı Boş Geçilemez!");
			RuleFor(x => x.District).NotNull().NotEmpty().WithMessage("İlçe Alanı Boş Geçilemez!");
			RuleFor(x => x.AddressDetail).NotNull().NotEmpty().WithMessage("Mahalle-Cadde-Sokak Alanı Boş Geçilemez!");

			RuleFor(x => x.ImagePath).NotEmpty().WithMessage("Image path is required")
			.Must(FormatDogruMu).WithMessage("Lütfen Doğru Formatta Dosya Yolu Veriniz! (.jpg, .png, .gif)");

		}

		private bool ResitMi(DateTime birthdate)
		{
			var age = DateTime.Today.Year - birthdate.Year;

			if (birthdate.Date > DateTime.Today.AddYears(-age)) age--;

			return age >= 18;
		}

		private bool FormatDogruMu(string imagePath)
		{
			var allowedExtensions = new[] { ".jpg", ".png", ".gif" };
			return allowedExtensions.Any(ext => imagePath.EndsWith(ext, StringComparison.OrdinalIgnoreCase));
		}

	}
}
