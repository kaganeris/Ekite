using Ekite.Application.DTOs.DepartmentDto;
using Ekite.Application.DTOs.JobDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Persistence.Concrete.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class DepartmentManager : IDepartmentService
    {
        private readonly IDepartmentRepository departmentRepository;

        public DepartmentManager(IDepartmentRepository departmentRepository)
        {
            this.departmentRepository = departmentRepository;
        }

        public async Task<List<DepartmentDto>> GetAllDepartments()
        {
            List<DepartmentDto> result = await departmentRepository.GetFilteredList(
                select: x => new DepartmentDto
                {
                    Id = x.Id,
                    Name = x.Name,
                },
                where: x => x.Status != Domain.Enums.Status.Passive);

            return result;
        }
    }
}
