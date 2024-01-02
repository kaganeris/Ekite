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
    public class CompanyConfig : BaseEntityConfig<Company>
    {

        public override void Configure(EntityTypeBuilder<Company> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(75);

            builder.HasData(new Company
            {
                Id = 1,
                Name = "EKİTE",
                Status = Status.Active,
                CreatedDate = DateTime.Now,

            },
            new Company
            {
                Id = 2,
                Name = "Bilge ADAM",
                Status = Status.Active,
                CreatedDate = DateTime.Now,

            });


            base.Configure(builder);
        }
    }
}
