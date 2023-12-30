using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Concrete.Repositories;
using Ekite.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
	public class EmployeeManager : IEmployeeService
	{
		private readonly IEmployeeRepository _employeeRepository;

		public EmployeeManager(IEmployeeRepository employeeRepository)
		{
			_employeeRepository = employeeRepository;
		}

		public Task<List<Employee>> TGetAll(Expression<Func<Employee, bool>> expression = null)
		{
			return _employeeRepository.GetAll(expression);
		}

		public async Task<bool> TCreate(Employee entity)
		{
			if (entity != null)
			{
				return await _employeeRepository.Create(entity);
			}
			else
			{
				return false;
			}
		}

		public async Task<Employee> TGetByExpression(Expression<Func<Employee, bool>> expression)
		{
			return await _employeeRepository.GetByExpression(expression);
		}

		public async Task<Employee> TGetById(int id)
		{
			if (id > 0)
			{
				return await _employeeRepository.GetById(id);
			}
			else
			{
				return null;
			}
		}

		public async Task<bool> THardDelete(Employee entity)
		{
			if (entity != null)
			{

				return await _employeeRepository.HardDelete(entity);
			}
			else
			{
				return false;

			}
		}

		public async Task<bool> TSoftDelete(Employee entity)
		{
			if (entity != null)
			{

				return await _employeeRepository.SoftDelete(entity);

			}
			else
			{
				return false;

			}
		}

		public async Task<bool> TUpdate(int id,UpdateEmployeeDto entity)
		{
			Employee employee = await _employeeRepository.GetById(id);	

			if (employee != null)
			{
				employee.Address = entity.Address;
				employee.PhoneNumber = entity.PhoneNumber;
				
				//if(entity.UploadPath != null)
				//{
				//	//TODOO: FOTOGRAF GÜNCELLEME YAPILACAK GELEN UZANTI KONTROL EDİLECEK 
				
				//}

				return await _employeeRepository.Update(employee);
			}
			else
			{
				return false;
			}
		}

		public async Task<bool> TUpdateWithoutStatus(Employee entity)
		{
			if (entity != null)
			{
				return await _employeeRepository.UpdateWithoutStatus(entity);
			}
			else
			{
				return false;
			}

		}

		public Task<Employee> TGetFilteredInclude(Expression<Func<Employee, bool>> expression = null, Func<IQueryable<Employee>, IIncludableQueryable<Employee, object>> include = null)
		{
			return _employeeRepository.GetFilteredInclude(expression, include);
		}

		public async Task<ResultSumEmployeeDto> GetSumEmployee(int id)
		{

			if (id > 0)
			{
				ResultSumEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new ResultSumEmployeeDto
				{
					FirstName = x.FirstName,
					LastName = x.LastName,
					SecondLastName = x.SecondLastName,
					SecondName = x.SecondName,
					Address = x.Address,
					DepartmentName = x.Department.Name,
					JobName = x.Job.Name,
					Email = x.AppUser.Email,
					PhoneNumber = x.PhoneNumber,
				}, where: x => x.Id == id && x.Status != Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job));
				return resultSum;

			}
			else
			{
				return null;
			}

		}

		public async Task<ResultDetailEmployeeDto> GetDetailEmployee(int id)
		{
			if (id > 0)
			{
				ResultDetailEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new ResultDetailEmployeeDto
				{
					FirstName = x.FirstName,
					LastName = x.LastName,
					SecondLastName = x.SecondLastName,
					SecondName = x.SecondName,
					Address = x.Address,
					DepartmentName = x.Department.Name,
					JobName = x.Job.Name,
					Email = x.AppUser.Email,
					PhoneNumber = x.PhoneNumber,
					BirthDate = x.BirthDate,
					BirthPlace = x.BirthPlace,
					CompanyName = x.Company.Name,
					HireDate = x.HireDate,
					ImagePath = x.ImagePath,
					LeavingDate = x.LeavingDate,
					TCNO = x.TCNO,
				}, where: x => x.Id == id && x.Status != Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job));
				return resultSum;
			}
			else
			{
				return null;
			}

		}
	}
}
