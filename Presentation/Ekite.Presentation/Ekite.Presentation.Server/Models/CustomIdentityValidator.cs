using Microsoft.AspNetCore.Identity;

namespace Ekite.Presentation.Server.Models
{
	public class CustomIdentityValidator : IdentityErrorDescriber
	{
		public override IdentityError PasswordTooShort(int length)
		{
			return new IdentityError()
			{
				Code = "PasswordTooShort", //Metot adı key'imiz.
				Description = $"Parola en az {length} karakter olmalıdır!"
			};
		}


		public override IdentityError PasswordRequiresUpper()
		{
			return new IdentityError()
			{
				Code = "PasswordRequiresUpper",
				Description = $"Parola Büyük harf içermelidir!"
			};
		}

		public override IdentityError PasswordRequiresLower()
		{
			return new IdentityError()
			{
				Code = "PasswordRequiresLower",
				Description = $"Parola küçük harf içermelidir!"
			};
		}

		public override IdentityError PasswordRequiresDigit()
		{
			return new IdentityError()
			{
				Code = "PasswordRequiresDigit",
				Description = $"Parola rakam içermelidir!"
			};
		}


		public override IdentityError PasswordRequiresNonAlphanumeric()
		{
			return new IdentityError()
			{
				Code = "PasswordRequiresNonAlphanumeric",
				Description = $"Parola özel karakter içermelidir!"
			};
		}

		


		
	}
}
