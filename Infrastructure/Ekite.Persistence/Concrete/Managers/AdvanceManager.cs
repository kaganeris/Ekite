using AutoMapper;
using Ekite.Application.DTOs.AdvanceDto;
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
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class AdvanceManager : IAdvanceService
    {
        private readonly IAdvanceRepository _advanceRepository;
        private readonly IMapper _mapper;
        private readonly IEmployeeRepository _employeeRepository;

        public AdvanceManager(IAdvanceRepository advanceRepository, IMapper mapper, IEmployeeRepository employeeRepository)
        {
            _advanceRepository = advanceRepository;
            _mapper = mapper;
            _employeeRepository = employeeRepository;
        }


        public async Task<bool> TCreate(CreateAdvanceDTO advanceVM)
        {
            if (await _employeeRepository.GetById(advanceVM.EmployeeId) != null)
            {
                Advance advance = _mapper.Map<Advance>(advanceVM);
                advance.ApprovalStatus = ApprovalStatus.Pending;
                return await _advanceRepository.Create(advance);
            }
            else
            {
                return false;

            }
        }

        public async Task<List<ResultAdvanceDTO>> TGetAll(Expression<Func<Advance, bool>> expression)
        {

            if (expression != null)
            {
                List<ResultAdvanceDTO> listAdvance = _mapper.Map<List<ResultAdvanceDTO>>(await _advanceRepository.GetAll(expression));

                return listAdvance;
            }
            else
            {
                return null;
            }
        }

        public async Task<Advance> TGetById(int id)
        {
            if (id > 0)
            {
                return await _advanceRepository.GetById(id);
            }
            else
            {
                return null;
            }
        }

        public async Task<UpdateAdvanceDTO> GetUpdateAdvance(int id)
        {
            if (id > 0)
            {
                UpdateAdvanceDTO updateAdvance = await _advanceRepository.GetFilteredFirstOrDefault(select: x => new UpdateAdvanceDTO
                {
                    AdvanceType = x.AdvanceType,
                    Amount = x.Amount,
                    Currency = x.Currency,
                    Description = x.Description,

                }, where: x => x.Id == id);

                return updateAdvance;
            }
            else
            {
                return null;

            }

        }

        public async Task<bool> TUpdate(int id, UpdateAdvanceDTO updateAdvanceDTO)
        {

            try
            {
                Advance advance = await _advanceRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending && x.EmployeeId == updateAdvanceDTO.EmployeeID && x.Id == id);
                if (advance != null)
                {
                    _mapper.Map(updateAdvanceDTO, advance);

                    await _advanceRepository.Update(advance);
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> THardDelete(int id)
        {
            try
            {
                if (id > 0)
                {
                    Advance advance = await _advanceRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending && x.Id == id);
                    if (advance != null)
                    {
                        return await _advanceRepository.HardDelete(advance);
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }

            }
            catch (Exception)
            {
                return false;
            }

        }

        public async Task<List<ResultApprovedAdvanceDTO>> GetApprovedList()
        {
            List<ResultApprovedAdvanceDTO> resultList = await _advanceRepository.GetFilteredList(select: x => new ResultApprovedAdvanceDTO
            {
                Id = x.Id,
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                Currency = EnumDescriber.Description(x.Currency),
                AdvanceType = EnumDescriber.Description(x.AdvanceType),
                Amount = x.Amount,
                CreatedDate = x.CreatedDate,
                ApprovalDate = x.ApprovalDate,
                Description = x.Description



            }, where: x => x.ApprovalStatus == ApprovalStatus.Approved, include: q => q.Include(x => x.Employee));
            return resultList;

        }

        public async Task<bool> ApproveAdvance(int id)
        {
            if (id > 0)
            {
                Advance advance = await _advanceRepository.GetById(id);
                advance.ApprovalStatus = ApprovalStatus.Approved;
                advance.ApprovalDate = DateTime.Now;
                return await _advanceRepository.UpdateWithoutStatus(advance);

            }
            else
            {
                return false;
            }
        }

        public async Task<List<ResultPendingAdvanceDTO>> GetPendingList()
        {
            List<ResultPendingAdvanceDTO> resultList = await _advanceRepository.GetFilteredList(select: x => new ResultPendingAdvanceDTO
            {
                Id = x.Id,
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                Currency = EnumDescriber.Description(x.Currency),
                AdvanceType = EnumDescriber.Description(x.AdvanceType),
                Amount = x.Amount,
                CreatedDate = x.CreatedDate,
                Description = x.Description

            }, where: x => x.ApprovalStatus == ApprovalStatus.Pending, include: q => q.Include(x => x.Employee));

            return resultList;


        }





        public async Task<List<ResultRejectAdvanceDTO>> GetRejectList()
        {
            List<ResultRejectAdvanceDTO> resultList = await _advanceRepository.GetFilteredList(select: x => new ResultRejectAdvanceDTO
            {
                Id = x.Id,
                FullName = x.Employee.FullName,
                ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                Currency = EnumDescriber.Description(x.Currency),
                AdvanceType = EnumDescriber.Description(x.AdvanceType),
                Amount = x.Amount,
                CreatedDate = x.CreatedDate,
                Description = x.Description,
                ApprovalDate = x.ApprovalDate,

            }, where: x => x.ApprovalStatus == ApprovalStatus.Rejected, include: q => q.Include(x => x.Employee));
            return resultList;
        }

        public async Task<bool> RejectAdvance(int id)
        {
            if (id > 0)
            {
                Advance advance = await _advanceRepository.GetById(id);
                advance.ApprovalStatus = ApprovalStatus.Rejected;
                advance.ApprovalDate = DateTime.Now;
                return await _advanceRepository.UpdateWithoutStatus(advance);
            }
            else
            {
                return false;
            }
        }

        public async Task<List<AdvanceDto>> GetAllAdvanceCompany(int companyId)
        {
            if (companyId == null)
            {
                return null;
            }
            else
            {
                List<AdvanceDto> resultList = await _advanceRepository.GetFilteredList(select: x => new AdvanceDto
                {
                    Id = x.Id,
                    FullName = x.Employee.FullName,
                    CompanyName = x.Employee.Company.Name,
                    ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                    Currency = EnumDescriber.Description(x.Currency),
                    AdvanceType = EnumDescriber.Description(x.AdvanceType),
                    Amount = x.Amount,
                    CreatedDate = x.CreatedDate,
                    Description = x.Description,
                    ApprovalDate = x.ApprovalDate,

                }, where: x => x.Employee.CompanyId == companyId, include: q => q.Include(x => x.Employee).Include(x => x.Employee.Company));

                return resultList;
            }
        }
    }
}

