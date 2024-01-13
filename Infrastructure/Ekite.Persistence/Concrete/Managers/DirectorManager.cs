using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Concrete.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
	public class DirectorManager: IDirectorService
	{
		private readonly IDirectorRepository _directorRepository;
		private readonly ILeaveRepository _leaveRepository;

		public DirectorManager(IDirectorRepository directorRepository, ILeaveRepository leaveRepository)
		{
			
			
			_directorRepository = directorRepository;
			_leaveRepository = leaveRepository;
		}

		public async Task<bool> ApproveLeave(int id)
		{

			if (id > 0)
			{

				Leave leave = await _leaveRepository.GetById(id);
				leave.ApprovalStatus = ApprovalStatus.Approved;
				leave.ApprovedDate = DateTime.Now;

				return await _leaveRepository.UpdateWithoutStatus(leave);




			}
			else
			{
				return false;
			}
		}

		public async Task<List<ResultPendingLeaveDTO>> GetPendingList()
		{
			List<ResultPendingLeaveDTO> resultList = await _leaveRepository.GetFilteredList(select: x => new ResultPendingLeaveDTO
			{
				Id = x.Id,
				Day = x.Day,
				LeaveEndDate = x.LeaveEndDate,
				LeaveStartDate = x.LeaveStartDate,
				LeaveType = EnumDescriber.Description(x.LeaveType),
				FullName = x.Employee.FullName,

			}, where: x => x.ApprovalStatus == ApprovalStatus.Pending, include: q => q.Include(x => x.Employee));
			return resultList;
		}

		public async Task<bool> RejectLeave(int id)
		{
			if (id > 0)
			{

				Leave leave = await _leaveRepository.GetById(id);
				leave.ApprovalStatus = ApprovalStatus.Rejected;
				leave.ApprovedDate = DateTime.Now;
				return await _leaveRepository.UpdateWithoutStatus(leave);

			}
			else
			{
				return false;
			}
		}
	}
}
