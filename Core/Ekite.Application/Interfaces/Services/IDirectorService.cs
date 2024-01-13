using Ekite.Application.DTOs.LeaveDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
	public interface IDirectorService
	{
		Task<List<ResultPendingLeaveDTO>> GetPendingList();
		Task<bool> ApproveLeave(int id);
		Task<bool> RejectLeave(int id);
	}
}
