using Ekite.Application.DTOs.JobDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface IJobService
    {
        Task<List<JobDto>> GetAllJob();
    }
}
