using AutoMapper;
using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Helpers;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
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


            CreateMap<CreateAdvanceDTO,Advance>().ReverseMap(); 

            CreateMap<UpdateAdvanceDTO, Advance>().ReverseMap();

            CreateMap<ResultAdvanceDTO, Advance>().ReverseMap().ForMember(x => x.AdvanceType, x => x.MapFrom(x => EnumDescriber.Description(x.AdvanceType))).ForMember(x => x.Currency, x => x.MapFrom(x => EnumDescriber.Description(x.Currency))).ForMember(x => x.ApprovalStatus, x => x.MapFrom(x => EnumDescriber.Description(x.ApprovalStatus)));


        }

 
    }
}
