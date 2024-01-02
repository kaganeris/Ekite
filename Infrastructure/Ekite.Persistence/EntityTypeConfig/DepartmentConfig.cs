using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.EntityTypeConfig
{
    public class DepartmentConfig : BaseEntityConfig<Department>
    {
        public override void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(75);

            builder.HasData(new Department
            {
                Id = 1,
                CreatedDate = DateTime.Now,
                Name = "IK",
                Status = Status.Active,

            },
            new Department
            {
                Id = 2,
                CreatedDate = DateTime.Now,
                Name = "Bilgi işlem",
                Status = Status.Active,
            });


            base.Configure(builder);
        }
    }
}
