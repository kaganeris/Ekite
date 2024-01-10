using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Enums
{
    public enum Currency
    {
        [Display(Name = "Türk Lirası ₺")]
        TurkLirasi = 1,
        [Display(Name = "Dolar $")]
        Dolar = 2,
        [Display(Name = "Euro £")]
        Euro = 3,
    }
}
