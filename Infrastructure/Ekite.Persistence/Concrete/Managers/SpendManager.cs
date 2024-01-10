using AutoMapper;
using Ekite.Application.DTOs.SpendDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Microsoft.Extensions.DependencyInjection;
using SixLabors.ImageSharp.Advanced;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
	public class SpendManager : ISpendService
	{
		
		private readonly ISpendRepository _spendRepository;
		private readonly IMapper _mapper;
		private readonly IEmployeeRepository _employeeRepository;

		public SpendManager(ISpendRepository spendRepository, IMapper mapper, IEmployeeRepository employeeRepository)
        {
			_spendRepository = spendRepository;
			_mapper = mapper;
			_employeeRepository = employeeRepository;
		}
        public async Task<bool> TCreate(CreateSpendDto createSpendDto)
		{
			if ( await _employeeRepository.GetById(createSpendDto.EmployeeId) != null)
			{
				Spend spend = _mapper.Map<Spend>(createSpendDto);
				spend.ApprovalStatus = ApprovalStatus.Pending;
				return await _spendRepository.Create(spend);
			}
			else
			{
				return false;
			}
		}

		

		public async Task<List<ResultSpendDto>> TGetAll(Expression<Func<Spend, bool>> expression = null)
		{
			if (expression != null)
			{
				 List<ResultSpendDto> listAdvance = _mapper.Map<List<ResultSpendDto>>(await _spendRepository.GetAll(expression));
				return listAdvance;	

			}
			else
			{
				return null;
			}
		}

		public async Task<Spend> TGetById(int id)
		{
			if (id>0)
			{
				return await _spendRepository.GetById(id);	
			}
			else
			{
				return null;
			}
		}

		public async Task<UpdateSpendDto> TGetUpdateSpend(int id)
		{
			if (id>0)
			{

				UpdateSpendDto updateSpendDto = await _spendRepository.GetFilteredFirstOrDefault(select: x => new UpdateSpendDto
				{
					Id=x.Id,
					Amount = x.Amount,
					Currency = x.Currency,
					
					Description = x.Description,
					
					ImagePath=x.ImagePath,
					EmployeeId=x.EmployeeId,
					SpendType= x.SpendType,

				}, where: x => x.Id == id); 
				return updateSpendDto;	

			}
			else
			{
				return null;
			}
		}

		public async Task<bool> THardDelete(int id)
		{
			try
			{
				if (id>0)
				{
					Spend spend = await _spendRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending &&  x.Id ==id);

					if (spend !=null)
					{
						return await _spendRepository.HardDelete(spend);

					}
					else
					{
						return false;	
					}
				}
				return false;
			}
			catch (Exception)
			{

				throw;
			}
		}

		public async Task<bool> TUpdate(UpdateSpendDto updateSpendDto)
		{
			try
			{

				Spend spend = _mapper.Map(updateSpendDto, await _spendRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending && x.Id == updateSpendDto.Id));
				if (spend != null)
				{
					await _spendRepository.Update(spend);
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











	}
}
