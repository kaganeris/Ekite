using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.SiteOwnerDto;
using Ekite.Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteOwnerController : ControllerBase
    {
        private readonly ISiteOwnerService siteOwnerService;

        public SiteOwnerController(ISiteOwnerService siteOwnerService)
        {
            this.siteOwnerService = siteOwnerService;
        }

        [HttpGet("[action]")]
        [Authorize(Roles = "SiteOwner")]
        public async Task<IActionResult> GetDetailSiteOwner(int id)
        {
            ResultDetailSiteOwner resultSum = await siteOwnerService.GetDetailSiteOwner(id);

            if (id > 0)
            {
                return Ok(resultSum);
            }
            else
            {
                return NotFound("Kişi bulunamadı");
            }
        }


        [HttpGet("[action]")]
        [Authorize(Roles = "SiteOwner")]
        public async Task<IActionResult> GetSummarySiteOwner(int id)
        {
            ResultDetailSiteOwner resultSum = await siteOwnerService.GetDetailSiteOwner(id);

            if (resultSum != null)
            {
                return Ok(resultSum);
            }
            else
            {
                return NotFound("Kişi bulunamadı");
            }
        }

        [HttpGet("[action]")]
        [Authorize(Roles = "SiteOwner")]
        public async Task<IActionResult> GetUpdateSiteOwner(int id)
        {
            UpdateSiteOwnerDto updateSiteOwnerDto = await siteOwnerService.GetUpdateSiteOwner(id);

            if (updateSiteOwnerDto != null)
            {
                return Ok(updateSiteOwnerDto);
            }
            else
            {
                return NotFound("Kişi bulunamadı");
            }


        }
    }
}
