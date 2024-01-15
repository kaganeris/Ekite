using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
    public class Advance : IBaseEntity
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public ApprovalStatus ApprovalStatus { get; set; }
        public Currency Currency { get; set; }
        public AdvanceType AdvanceType { get; set; }
        public decimal Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Status Status { get; set; }


        //NAV
        public int EmployeeId { get; set; }
        public Employee  Employee{ get; set; }


    }
}
