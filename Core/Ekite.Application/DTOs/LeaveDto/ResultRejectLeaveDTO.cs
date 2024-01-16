using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.LeaveDto
{
    public class ResultRejectLeaveDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string LeaveType { get; set; }
        public string ApprovalStatus { get; set; }
        public int Day { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ApprovedDate { get; set; }
        public DateTime? LeaveStartDate { get; set; }
        public DateTime? LeaveEndDate { get; set; }
    }
}
