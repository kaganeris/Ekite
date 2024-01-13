using Ekite.Application.Interfaces.Services;
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
		//[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetPendingList()
		{

			return Ok(await _directorService.GetPendingList());
		}
	}
}
