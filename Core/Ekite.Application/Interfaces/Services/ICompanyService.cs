using Ekite.Application.DTOs.CompanyDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface ICompanyService
    {
        Task<List<CompanyDto>> GetAllCompanies();
    }
}
