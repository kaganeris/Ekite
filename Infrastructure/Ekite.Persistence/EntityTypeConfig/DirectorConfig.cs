using Ekite.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.EntityTypeConfig
{
	public class DirectorConfig: BaseEntityConfig<Director>
	{
		public override void Configure(EntityTypeBuilder<Director> builder)
		{
			builder.Property(x => x.FirstName).HasMaxLength(20).HasAnnotation("MinLength", 2).IsRequired();
			builder.Property(x => x.LastName).HasMaxLength(20).HasAnnotation("MinLength", 2).IsRequired();

			builder.Property(x => x.SecondName).HasMaxLength(20).HasAnnotation("MinLength", 2).IsRequired(false);
			builder.Property(x => x.SecondLastName).HasMaxLength(20).HasAnnotation("MinLength", 2).IsRequired(false);

			builder.Property(x => x.BirthDate).IsRequired();

			builder.Property(x => x.TCNO).IsRequired().HasMaxLength(11).HasAnnotation("MinLength", 11);

			builder.Property(x => x.BirthPlace).IsRequired().HasMaxLength(50);

			builder.Property(x => x.HireDate).IsRequired();

			builder.Property(x => x.LeavingDate).IsRequired(false);

			builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(20);			

			builder.Property(x => x.Salary).IsRequired();

			builder.Property(x => x.ImagePath).IsRequired(false);

			builder.ToTable("Directors");


			base.Configure(builder);
		}
	}
}
