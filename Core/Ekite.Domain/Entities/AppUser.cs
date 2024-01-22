using Ekite.Domain.Enums;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
    public class AppUser : IdentityUser, IBaseEntity
    {
        public int? RenewPasswordCode { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Status Status { get; set; }
        public Employee? Employee { get; set; }
        public Director? Director { get; set; }
        public SiteOwner? SiteOwner { get; set; }

    }
}
