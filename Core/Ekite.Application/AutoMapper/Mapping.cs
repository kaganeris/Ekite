using AutoMapper;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.AutoMapper
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<UpdateEmployeeDto, Employee>().ReverseMap();
            CreateMap<Leave, CreateLeaveDTO>().ReverseMap();
            CreateMap<Leave, UpdateLeaveDTO>().ReverseMap();
        }
    }
}
