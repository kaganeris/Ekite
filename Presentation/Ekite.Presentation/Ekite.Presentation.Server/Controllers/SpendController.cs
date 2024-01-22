using Ekite.Application.DTOs.SpendDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.Services;
using Ekite.Application.Validators.SpendValidations;
using Ekite.Domain.Enums;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;


namespace Ekite.Presentation.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SpendController : ControllerBase
	{
		private readonly ISpendService _spendService;

		public SpendController(ISpendService spendService)
		{
			_spendService = spendService;
		}

		[HttpGet("[action]/{employeeId}")]
		[Authorize(Roles ="Admin,Employee")]
		public async Task<IActionResult> GetListSpend(int employeeId)
		{
			List<ResultSpendDto> results = await _spendService.TGetAll(x => x.Status != Domain.Enums.Status.Passive && x.EmployeeId == employeeId);
			return Ok(results);

		}

		[HttpGet("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> GetSpendTypeDisplay()
		{
			var enums = Enum.GetValues<SpendType>();
			List<SpendTypeDto> spendTypes = new List<SpendTypeDto>();
			foreach (var item in enums)
			{
				SpendTypeDto typeDto = new SpendTypeDto()
				{
					SpendTypeNo = item,
					SpendTypeName = EnumDescriber.Description(item)

				};
				spendTypes.Add(typeDto);
			}
			return Ok(spendTypes);

		}


		[HttpGet("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> GetCurrencyDisplay()
		{
			var enums = Enum.GetValues<Currency>();
			List<CurrencyDto> currencyTypes = new List<CurrencyDto>();
			foreach (var item in enums)
			{
				CurrencyDto currency = new CurrencyDto()
				{
					CurrencyTypeNo = item,
					CurrencyName = EnumDescriber.Description(item)

				};
				currencyTypes.Add(currency);
			}
			return Ok(currencyTypes);

		}



		[HttpPost("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> CreateSpend([FromForm] CreateSpendDto createSpendDto)
		{
			CreateSpendValidator validations = new CreateSpendValidator();
			ValidationResult result = await validations.ValidateAsync(createSpendDto);
			if (result.IsValid)
			{
				if (await _spendService.TCreate(createSpendDto))
				{
					return Ok("Harcama oluşturuldu");
				}
				else
				{
					return StatusCode(500, "Harcama oluşturulurken hata oluştu!");

				}

			}
			else
			{
				List<string> errors = new List<string>();
				foreach (var error in result.Errors)
				{
					errors.Add(error.ErrorMessage);
				}
				return BadRequest(errors);
			}


		}

		[HttpGet("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> UpdateSpend(int id)
		{
			UpdateSpendDto updateSpendDto = await _spendService.TGetUpdateSpend(id);
			if (updateSpendDto != null)
			{
				return Ok(updateSpendDto);
			}
			else
			{
				return NotFound("Harcama Bulunamadı");
			}
		}

		[HttpPut("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> UpdateSpend([FromForm] UpdateSpendDto updateSpendDto)
		{
			UpdateSpendValidator validations = new UpdateSpendValidator();
			ValidationResult result = await validations.ValidateAsync(updateSpendDto);
			if (result.IsValid)
			{
				if (await _spendService.TUpdate(updateSpendDto))
				{
					return Ok("Harcama Güncellendi");
				}
				else
				{
					return StatusCode(500, "Harcama güncellenirken hata oluştu");
				}
			}

			else
			{
				List<string> errors = new List<string>();
				foreach (var error in result.Errors)
				{
					errors.Add(error.ErrorMessage);
				}
				return BadRequest(errors);
			}
		}


		[HttpDelete("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> DeleteSpend(int id)
		{
			if (await _spendService.THardDelete(id))
			{
				return Ok("Silme Başarılı");
			}

			return BadRequest("Silme Başarısız!");
		}

		[HttpGet]
		[Route("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> GetApprovedList()
		{

			return Ok(await _spendService.GetApprovedList());
		}


		[HttpGet]
		[Route("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> GetRejectList()
		{

			return Ok(await _spendService.GetRejectList());
		}

		[HttpGet("[action]")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> ApproveSpend(int id)
		{
			if (await _spendService.ApproveSpend(id))
			{
				return Ok("İşlem başarılı");
			}

			return BadRequest("İşlem sırasında hata oluştu");
		}

		[HttpGet("[action]")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> RejectSpend(int id)
		{
			if (await _spendService.RejectSpend(id))
			{
				return Ok("İşlem başarılı");
			}

			return BadRequest("İşlem sırasında hata oluştu");
		}


		[HttpGet]
		[Route("[action]")]
		[Authorize(Roles = "Admin,Employee")]
		public async Task<IActionResult> GetPendingList()
		{

			return Ok(await _spendService.GetPendingList());
		}

	}
}
