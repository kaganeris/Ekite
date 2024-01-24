using Ekite.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService companyService;

        public CompanyController(ICompanyService companyService)
        {
            this.companyService = companyService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetCompanies()
        {
            return Ok(await companyService.GetAllCompanies());
        }
    }
}
