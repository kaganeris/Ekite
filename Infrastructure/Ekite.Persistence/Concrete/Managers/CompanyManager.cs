using Ekite.Application.DTOs.CompanyDto;
using Ekite.Application.DTOs.JobDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Persistence.Concrete.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class CompanyManager : ICompanyService
    {
        private readonly ICompanyRepository companyRepository;

        public CompanyManager(ICompanyRepository companyRepository)
        {
            this.companyRepository = companyRepository;
        }

        public async Task<List<CompanyDto>> GetAllCompanies()
        {
            List<CompanyDto> result = await companyRepository.GetFilteredList(
                select: x => new CompanyDto
                {
                    Id = x.Id,
                    Name = x.Name,
                    EmployeeCount = x.Employees.Count,
                },
                where: x => x.Status != Domain.Enums.Status.Passive, include: q => q.Include(x => x.Employees));

            return result;
        }
    }
}
