using Ekite.Application.DTOs.JobDto;
using Ekite.Application.DTOs.LeaveDto;
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
    public class JobManager : IJobService
    {
        private readonly IJobRepository jobRepository;

        public JobManager(IJobRepository jobRepository)
        {
            this.jobRepository = jobRepository;
        }

        public async Task<List<JobDto>> GetAllJob()
        {
            List<JobDto> result = await jobRepository.GetFilteredList(
                select: x => new JobDto
                {
                    Id = x.Id,
                    Name = x.Name,
                },
                where: x => x.Status != Domain.Enums.Status.Passive);

            return result;
        }
    }
}
