using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.LeaveDto
{
	public class ResultPendingLeaveDTO
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string LeaveType { get; set; }
		public int Day { get; set; }
		public DateTime? LeaveStartDate { get; set; }
		public DateTime? LeaveEndDate { get; set; }
	}
}
