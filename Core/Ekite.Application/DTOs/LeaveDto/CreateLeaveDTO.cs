using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.LeaveDto
{
    public class CreateLeaveDTO
    {
        public LeaveType LeaveType { get; set; }
        public DateTime? LeaveStartDate { get; set; }
        public DateTime? LeaveEndDate { get; set; }
        public int EmployeeId { get; set; }
    }
}
