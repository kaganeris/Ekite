using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.AdvanceDto
{
    public class UpdateAdvanceDTO
    {
        public string Description { get; set; }
        public Currency Currency { get; set; }
        public AdvanceType AdvanceType { get; set; }
        public decimal Amount { get; set; }
        public int EmployeeID { get; set; }

    }
}
