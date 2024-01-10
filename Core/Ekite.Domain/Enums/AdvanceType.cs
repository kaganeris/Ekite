using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Enums
{
    public enum AdvanceType
    {
        [Display(Name = "Bireysel")]
        Individual = 1,
        [Display(Name = "Kurumsal")]
        Institutional = 2,
      
    }
}
