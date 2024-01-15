using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.Services;
using Ekite.Application.Validators.AdvanceValidations;
using Ekite.Domain.Enums;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvanceController : ControllerBase
    {
        private readonly IAdvanceService _advanceService;
        private readonly IEmployeeService _employeeService;

        public AdvanceController(IAdvanceService advanceService,IEmployeeService employeeService)
        {
            _advanceService = advanceService;
            _employeeService = employeeService;
        }


        [HttpGet("[action]")]
        public async Task<IActionResult> GetListAdvance(int employeeId)
        {

            List<ResultAdvanceDTO> results = await _advanceService.TGetAll(x => x.Status != Status.Passive && x.EmployeeId == employeeId);
            return Ok(results);
        }


        [HttpGet("[action]")]
        public async Task<IActionResult> GetEnums()
        {
            CreateEnumAdvanceDTO createEnum = new CreateEnumAdvanceDTO();

            foreach (AdvanceType item in Enum.GetValues(typeof(AdvanceType)))
            {
                createEnum.AdvanceType[(int)item] = EnumDescriber.Description(item);
            }

            foreach (Currency item in Enum.GetValues(typeof(Currency)))
            {
                createEnum.Currency[(int)item] = EnumDescriber.Description(item);
            }
          
            return Ok(createEnum);
        }




        [HttpPost("[action]")]
        [Authorize(Roles ="Admin,Employee")]
        public async Task<IActionResult> CreateAdvance(CreateAdvanceDTO advanceDto)
        {

            CreateAdvanceValidator validations = new CreateAdvanceValidator(await _employeeService.TGetById(advanceDto.EmployeeId));
            ValidationResult result = await validations.ValidateAsync(advanceDto);

            if (result.IsValid)
            {
                if (await _advanceService.TCreate(advanceDto))
                {
                    return Ok("Avans oluşturuldu.");
                }
                else
                {

                    return StatusCode(500, "Avans oluşturulurken hata oluştu.");
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
        public async Task<IActionResult> GetUpdateById(int id)
        {
            UpdateAdvanceDTO updateAdvance = await _advanceService.GetUpdateAdvance(id);
            if (updateAdvance != null)
            {
                return Ok(updateAdvance);

            }
            else
            {
                return NotFound("Kişi Bulunamadı!");
            }
        }

        [HttpPut("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> UpdateAdvance(int id, UpdateAdvanceDTO updateAdvance)
        {


            UpdateAdvanceValidator validations = new UpdateAdvanceValidator(await _employeeService.TGetById(updateAdvance.EmployeeID));
            ValidationResult result = await validations.ValidateAsync(updateAdvance);

            if (result.IsValid)
            {

                if (await _advanceService.TUpdate(id, updateAdvance))
                {
                    return Ok("Avans güncellendi");
                }
                else
                {
                    return StatusCode(500, "Avans güncellenirken hata oluştu.");
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
        public async Task<IActionResult> DeleteAdvance(int id)
        {

            if (await _advanceService.THardDelete(id))
            {
                return Ok("Avans başarıyla silindi.");
            }

            return BadRequest("Avans silinirken hata oluştu.");

        }

    }
}
