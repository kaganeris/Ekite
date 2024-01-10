using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.SpendDto
{
	public class CurrencyDto
	{
        public Currency CurrencyTypeNo { get; set; }

        public string CurrencyName { get; set; }
    }
}
