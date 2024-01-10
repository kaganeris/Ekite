using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.AdvanceDto
{
    public class ResultAdvanceDTO
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string ApprovalStatus { get; set; }
        public string Currency { get; set; }
        public string AdvanceType { get; set; }
        public decimal Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
 
    }
}
