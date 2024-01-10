using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Enums
{
    public enum ApprovalStatus
    {
        [Display(Name = "Rededildi")]
        Rejected = 1, 
        [Display(Name = "Bekleniyor")]
        Pending = 2, 
        [Display(Name = "Onaylandı")]     
        Approved = 3
    }
}
