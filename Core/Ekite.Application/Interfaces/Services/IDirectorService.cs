using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Domain.Entities;
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

		Task<bool> TCreate(Director entity);
		Task<bool> TUpdate(int id, UpdateDirectorDto entity);
		Task<int> GetDirectorIdByUserId(string id);

		Task<ResultSumDirectorDto> GetSumDirector(int id);
		Task<ResultDetailDirectorDto> GetDetailDirector(int id);
		Task<UpdateDirectorDto> GetUpdateDirector(int id);
	}
}
