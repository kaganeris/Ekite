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
        private readonly ILeaveService leaveService;
        private readonly IAdvanceService advanceService;
        private readonly ISpendService spendService;

        public CompanyController(ICompanyService companyService ,ILeaveService leaveService,IAdvanceService advanceService,ISpendService spendService)
        {
            this.companyService = companyService;
            this.leaveService = leaveService;
            this.advanceService = advanceService;
            this.spendService = spendService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetCompanies()
        {
            return Ok(await companyService.GetAllCompanies());
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetCompanyLeaves(int companyID)
        {

            return Ok(await leaveService.GetAllLeaveCompany(companyID));
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetCompanyAdvances(int companyID)
        {

            return Ok(await advanceService.GetAllAdvanceCompany(companyID));
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetCompanySpends(int companyID)
        {

            return Ok(await spendService.GetAllSpendCompany(companyID));
        }
    }
}
