using AutoMapper;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class LeaveManager : ILeaveService
    {
        private readonly ILeaveRepository leaveRepository;
        private readonly IEmployeeRepository employeeRepository;
        private readonly IMapper mapper;

        public LeaveManager(ILeaveRepository leaveRepository, IEmployeeRepository employeeRepository, IMapper mapper)
        {
            this.leaveRepository = leaveRepository;
            this.employeeRepository = employeeRepository;
            this.mapper = mapper;
        }

        public async Task<bool> ApproveLeave(int id)
        {
            if (id > 0)
            {

                Leave leave = await leaveRepository.GetById(id);
                leave.ApprovalStatus = ApprovalStatus.Approved;
                leave.ApprovedDate = DateTime.Now;

                return await leaveRepository.UpdateWithoutStatus(leave);

            }
            else
            {
                return false;
            }
        }



        public async Task<bool> RejectLeave(int id)
        {
            if (id > 0)
            {

                Leave leave = await leaveRepository.GetById(id);
                leave.ApprovalStatus = ApprovalStatus.Rejected;
                leave.ApprovedDate = DateTime.Now;
                return await leaveRepository.UpdateWithoutStatus(leave);

            }
            else
            {
                return false;
            }
        }


        public async Task<List<ResultLeaveDTO>> GetAllLeaveList(int employeeId)
        {
            if (employeeId <= 0)
            {
                return null;
            }
            else
            {
                List<ResultLeaveDTO> result = await leaveRepository.GetFilteredList(
                select: x => new ResultLeaveDTO
                {
                    Id = x.Id,
                    Day = x.Day,
                    ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                    LeaveType = EnumDescriber.Description(x.LeaveType),
                    CreatedDate = x.CreatedDate,
                    UpdatedDate = x.UpdatedDate,
                    ApprovedDate = x.ApprovedDate,
                    LeaveEndDate = x.LeaveEndDate,
                    LeaveStartDate = x.LeaveStartDate,
                },
                where: x => x.EmployeeId == employeeId);

                return result;
            }

        }

        public async Task<UpdateLeaveDTO> GetLeaveById(int leaveId)
        {
            UpdateLeaveDTO updateLeaveDTO = await leaveRepository.GetFilteredFirstOrDefault(
                select: x => new UpdateLeaveDTO
                {
                    Id = x.Id,
                    LeaveStartDate = x.LeaveStartDate,
                    LeaveEndDate = x.LeaveEndDate,
                    LeaveType = x.LeaveType,
                },
                where: x => x.Id == leaveId
                );
            return updateLeaveDTO;
        }



        public async Task<List<ResultPendingLeaveDTO>> GetPendingList()
        {
            List<ResultPendingLeaveDTO> resultList = await leaveRepository.GetFilteredList(select: x => new ResultPendingLeaveDTO
            {
                Id = x.Id,
                Day = x.Day,
                LeaveEndDate = x.LeaveEndDate,
                LeaveStartDate = x.LeaveStartDate,
                LeaveType = EnumDescriber.Description(x.LeaveType),
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                CreatedDate = x.CreatedDate,


            }, where: x => x.ApprovalStatus == ApprovalStatus.Pending, include: q => q.Include(x => x.Employee));

            return resultList;

        }

        public async Task<List<ResultApprovedLeaveDTO>> GetApprovedList()
        {
            List<ResultApprovedLeaveDTO> resultList = await leaveRepository.GetFilteredList(select: x => new ResultApprovedLeaveDTO
            {
                Id = x.Id,
                Day = x.Day,
                LeaveEndDate = x.LeaveEndDate,
                LeaveStartDate = x.LeaveStartDate,
                LeaveType = EnumDescriber.Description(x.LeaveType),
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                ApprovedDate = x.ApprovedDate,
                CreatedDate = x.CreatedDate,

            }, where: x => x.ApprovalStatus == ApprovalStatus.Approved, include: q => q.Include(x => x.Employee));

            return resultList;
        }

        public async Task<List<ResultRejectLeaveDTO>> GetRejectList()
        {
            List<ResultRejectLeaveDTO> resultList = await leaveRepository.GetFilteredList(select: x => new ResultRejectLeaveDTO
            {
                Id = x.Id,
                Day = x.Day,
                LeaveEndDate = x.LeaveEndDate,
                LeaveStartDate = x.LeaveStartDate,
                LeaveType = EnumDescriber.Description(x.LeaveType),
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                ApprovedDate = x.ApprovedDate,
                CreatedDate = x.CreatedDate,

            }, where: x => x.ApprovalStatus == ApprovalStatus.Rejected, include: q => q.Include(x => x.Employee));

            return resultList;
        }


        public async Task<bool> TCreate(CreateLeaveDTO createLeaveDTO)
        {

            Employee employee = await employeeRepository.GetById(createLeaveDTO.EmployeeId);
            if (employee == null)
            {
                return false;
            }
            else
            {

                Leave leave = mapper.Map<Leave>(createLeaveDTO);
                leave.ApprovalStatus = ApprovalStatus.Pending;

                return await leaveRepository.Create(leave);
            }

        }

        public async Task<bool> THardDelete(int id)
        {
            if (id > 0)
            {

                Leave leave = await leaveRepository.GetByExpression(x => x.Id == id && x.ApprovalStatus == ApprovalStatus.Pending);
                if (leave == null)
                {
                    return false;
                }
                else
                {
                    return await leaveRepository.HardDelete(leave);
                }

            }
            else
            {
                return false;
            }

        }

        public async Task<bool> TUpdate(UpdateLeaveDTO updateLeaveDTO)
        {
            Leave leave = await leaveRepository.GetById(updateLeaveDTO.Id);
            if (leave == null)
            {
                return false;
            }
            else
            {
                leave = mapper.Map(updateLeaveDTO, leave);
                return await leaveRepository.Update(leave);
            }
        }

 
    }
}
