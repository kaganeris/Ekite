using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
    public class Leave : IBaseEntity
    {
        public int Id { get; set; }
        [NotMapped]
        public int Day { 
            get 
            {  
                TimeSpan difference = LeaveEndDate.Value.Date - LeaveStartDate.Value.Date;
                return difference.Days;
            } 
        }

        public ApprovalStatus ApprovalStatus { get; set; }
        public LeaveType LeaveType { get; set; }
        public DateTime? ApprovedDate { get; set; }
        public DateTime? LeaveStartDate { get; set; }
        public DateTime? LeaveEndDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Status Status { get; set; }

        // NAV

        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}
