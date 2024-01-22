using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.SiteOwnerDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface ISiteOwnerService
    {
        Task<ResultSumSiteOwnerDto> GetSumSiteOwner(int id);
        Task<ResultDetailSiteOwner> GetDetailSiteOwner(int id);
        Task<UpdateSiteOwnerDto> GetUpdateSiteOwner(int id);
    }
}
