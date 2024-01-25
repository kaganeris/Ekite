using Ekite.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService departmentService;

        public DepartmentController(IDepartmentService departmentService)
        {
            this.departmentService = departmentService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetDepartments()
        {
            return Ok(await departmentService.GetAllDepartments());
        }
    }
}
