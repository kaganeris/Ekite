using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
    public interface IBaseEntity
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate{ get; set; }
        public DateTime? DeletedDate{ get; set; }
        public Status Status { get; set; }

    }
}
