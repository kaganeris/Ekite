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
    public class JobConfig : BaseEntityConfig<Job>
    {

        public override void Configure(EntityTypeBuilder<Job> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(75);

            builder.HasData(new Job
            {
                Id = 1,
                 CreatedDate = DateTime.Now,
                  Name = "Yazılım Geliştirici",
                   Status = Status.Active

            },
            new Job
            {
                Id = 2,
                CreatedDate = DateTime.Now,
                Name = "Proje Müdürü",
                Status = Status.Active
            });


            base.Configure(builder);
        }

    }
}
