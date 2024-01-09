using Ekite.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.EntityTypeConfig
{
    public class LeaveConfig : BaseEntityConfig<Leave>
    {
        public override void Configure(EntityTypeBuilder<Leave> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Employee).WithMany(x => x.Leaves).HasForeignKey(x => x.EmployeeId);
            base.Configure(builder);

        }
    }
}
