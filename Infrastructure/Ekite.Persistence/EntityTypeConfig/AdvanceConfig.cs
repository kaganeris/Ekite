using Ekite.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.EntityTypeConfig
{
    public class AdvanceConfig : BaseEntityConfig<Advance>
    {

        public override void Configure(EntityTypeBuilder<Advance> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x=>x.Description).HasMaxLength(250).IsRequired();
            builder.Property(x=>x.Amount).IsRequired();

            builder.HasOne(x=>x.Employee).WithMany(x=>x.Advances).HasForeignKey(x=>x.EmployeeId);

            base.Configure(builder);
        }

    }
}
