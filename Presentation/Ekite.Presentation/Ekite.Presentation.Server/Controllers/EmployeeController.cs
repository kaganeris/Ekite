using AutoMapper;
using Ekite.Application.Interfaces.Services;
using Ekite.Application.VMs.EmployeeVM;
using Ekite.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Ekite.Presentation.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class EmployeeController : ControllerBase
	{
		private readonly IEmployeeService _employeeService;
		private readonly IMapper _mapper;

		public EmployeeController(IEmployeeService employeeService, IMapper mapper)
		{
			_employeeService = employeeService;
			_mapper = mapper;
		}


		[HttpGet("[action]")]
		public async Task<IActionResult> GetSummaryPersonel(int id)
		{
			ResultSumEmployeeVM resultSum = await _employeeService.GetSumEmployee(id);
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
		public async Task<IActionResult> GetDetailPersonel(int id)
		{
			ResultDetailEmployeeVM resultSum = await _employeeService.GetDetailEmployee(id);

			if (id > 0)
			{
				return Ok(resultSum);
			}
			else
			{
				return NotFound("Kişi bulunamadı");
			}

		}

		



	}
}
