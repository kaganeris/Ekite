using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.DirectorDto
{
	public class ApproveRejectLeaveDTO
	{
		public int Id { get; set; }
		public bool IsApproved { get; set; }

		public bool IsRejected { get; set; }

	}
}
