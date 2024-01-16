using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.Services;
using Ekite.Application.Validators;
using Ekite.Application.Validators.LeaveValidations;
using Ekite.Domain.Enums;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace Ekite.Presentation.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveController : ControllerBase
    {
        private readonly ILeaveService leaveService;

        public LeaveController(ILeaveService leaveService)
        {
            this.leaveService = leaveService;
        }

        [HttpGet]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetList(int employeeId)
        {
            List<ResultLeaveDTO> list = await leaveService.GetAllLeaveList(employeeId);
            return Ok(list);
        }



        [HttpGet]
        [Route("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetPendingList()    
                {

            return Ok(await leaveService.GetPendingList());
        }



        [HttpGet]
        [Route("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetApprovedList()
        {

            return Ok(await leaveService.GetApprovedList());
        }



        [HttpGet]
        [Route("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetRejectList()
        {

            return Ok(await leaveService.GetRejectList());
        }



        [HttpPost]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> Create([FromForm]CreateLeaveDTO createLeaveDTO)
        {
            CreateLeaveValidator validationRules = new CreateLeaveValidator();
            ValidationResult result = validationRules.Validate(createLeaveDTO);
            if (result.IsValid)
            {
                bool response = await leaveService.TCreate(createLeaveDTO);
                if (response)
                {
                    return Ok("İzin başarıyla eklendi");
                }
                else
                {
                    return StatusCode(500, "İzin eklenemedi");
                }
            }
            else
            {
                List<string> errors = new List<string>();
                foreach (var item in result.Errors)
                {
                    errors.Add(item.ErrorMessage);
                }
                return BadRequest(error: errors);
            }
        }

        [HttpDelete]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> Delete(int id)
        {
            bool result = await leaveService.THardDelete(id);

            if (result)
            {
                return Ok("İzin başarıyla silindi");
            }
            else
            {
                return BadRequest("İzin silinemedi");
            }
        }


        [HttpGet]
        [Route("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetUpdateLeaveById(int id)
        {
            UpdateLeaveDTO updateLeaveDto = await leaveService.GetLeaveById(id);
            if (updateLeaveDto == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(updateLeaveDto);
            }
        }


        [HttpGet("[action]")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> GetLeaveTypes()
        {
            var enums = Enum.GetValues<LeaveType>();
            List<LeaveTypeDTO> leaveTypes = new List<LeaveTypeDTO>();
            foreach (var item in enums)
            {

                LeaveTypeDTO typeDTO = new LeaveTypeDTO()
                {
                    LeaveTypeNo = item,
                    LeaveTypeName = EnumDescriber.Description(item),
                };

                leaveTypes.Add(typeDTO);
            }

            return Ok(leaveTypes);
        }


        [HttpPut]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> Update([FromForm]UpdateLeaveDTO updateLeaveDTO)
        {
            UpdateLeaveValidator validationRules = new UpdateLeaveValidator();
            ValidationResult result = validationRules.Validate(updateLeaveDTO);
            if(result.IsValid)
            {
                bool response = await leaveService.TUpdate(updateLeaveDTO);
                if (response)
                {
                    return Ok("İzin güncellendi");
                }
                else
                {
                    return StatusCode(500, "İzin güncellenirken hata oluştu");
                }
            }
            else
            {
                List<string> errors = new List<string>();
                foreach (var item in result.Errors)
                {
                    errors.Add(item.ErrorMessage);
                }
                return BadRequest(errors);
            }
        }




        [HttpGet("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> ApproveLeave(int id)
        {
            if (await leaveService.ApproveLeave(id))
            {
                return Ok("İşlem başarılı");
            }

            return BadRequest("İşlem sırasında hata oluştu");
        }


        [HttpGet("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> RejectLeave(int id)
        {
            if (await leaveService.RejectLeave(id))
            {
                return Ok("İşlem başarılı");
            }

            return BadRequest("İşlem sırasında hata oluştu");
        }

    }
}
