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

        [Display(Name = "Reddedildi")]
        Rejected = 1,



        [Display(Name = "Bekleniyor")]

        Pending,
        [Display(Name = "Onaylandı")]
        Approved



    }
}
