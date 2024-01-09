using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.LeaveDto
{
    public class LeaveTypeDTO
    {
        public string LeaveTypeName { get; set; }
        public LeaveType LeaveTypeNo { get; set; }
    }
}
