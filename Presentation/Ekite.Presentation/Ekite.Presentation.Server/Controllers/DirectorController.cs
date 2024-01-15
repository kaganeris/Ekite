using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekite.Presentation.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DirectorController : ControllerBase
	{

		private readonly IDirectorService _directorService;

		public DirectorController(IDirectorService directorService)
		{
			_directorService = directorService;
		}


		[HttpGet("[action]")]
		//[Authorize(Roles = "Admin")]
		public async Task<IActionResult> ApproveLeave(int id)
		{
			if (await _directorService.ApproveLeave(id))
			{
				return Ok("İşlem başarılı");
			}

			return BadRequest("İşlem sırasında hata oluştu");
		}



		[HttpGet("[action]")]
		//[Authorize(Roles = "Admin")]
		public async Task<IActionResult> RejectLeave(int id)
		{
			if (await _directorService.RejectLeave(id))
			{
				return Ok("İşlem başarılı");
			}

			return BadRequest("İşlem sırasında hata oluştu");
		}



		[HttpGet]
		[Route("[action]")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetPendingList()
		{

			return Ok(await _directorService.GetPendingList());
		}


		[HttpPut("[action]")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> PutUpdateDirector(int id, [FromForm] UpdateDirectorDto directorDto)
		{

			if (await _directorService.TUpdate(id, directorDto))
			{
				return Ok(directorDto);
			}
			else
			{
				return NotFound("bulunamadı");
			}
		}


		[HttpGet("[action]")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetDetailDirector(int id)
		{
			ResultDetailDirectorDto resultSum = await _directorService.GetDetailDirector(id);

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
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetSummaryDirector(int id)
		{
			ResultDetailDirectorDto resultSum = await _directorService.GetDetailDirector(id);

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
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetUpdateDirector(int id)
		{
			UpdateDirectorDto updateDirector = await _directorService.GetUpdateDirector(id);

			if (updateDirector != null)
			{
				return Ok(updateDirector);
			}
			else
			{
				return NotFound("Kişi bulunamadı");
			}


		}
	}
}
