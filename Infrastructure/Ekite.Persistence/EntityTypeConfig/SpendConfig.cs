using Ekite.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.EntityTypeConfig
{
	public class SpendConfig : BaseEntityConfig<Spend>
	{

		public override void Configure(EntityTypeBuilder<Spend> builder)
		{

			builder.Property(x=>x.Description).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Amount).IsRequired();
			builder.HasKey(x => x.Id);

			builder.HasOne(x=>x.Employee).WithMany(x=>x.Spends).HasForeignKey(x=>x.EmployeeId);
			base.Configure(builder);
		}

	}
}
