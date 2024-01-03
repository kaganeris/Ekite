using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Domain.Entities;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface IEmployeeService
    {
        Task<Employee> TGetById(int id);
        Task<Employee> TGetByExpression(Expression<Func<Employee, bool>> expression);
        Task<bool> TCreate(Employee entity);
        Task<bool> TUpdate(int id, UpdateEmployeeDto entity);
        Task<bool> TUpdateWithoutStatus(Employee entity);
        Task<bool> TSoftDelete(Employee entity);
        Task<bool> THardDelete(Employee entity);
		Task<List<Employee>> TGetAll(Expression<Func<Employee, bool>> expression = null);
		Task<Employee> TGetFilteredInclude(Expression<Func<Employee, bool>> expression = null, Func<IQueryable<Employee>, IIncludableQueryable<Employee, object>> include = null);
        Task<ResultSumEmployeeDto> GetSumEmployee(int id);   
        Task<ResultDetailEmployeeDto> GetDetailEmployee(int id);

        Task<UpdateEmployeeDto> GetUpdateEmployee(int id);


        Task<int> GetEmployeeIdByUserId(string id);

	}
}
