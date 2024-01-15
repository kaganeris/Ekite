using AutoMapper;
using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.DTOs.SpendDto;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Domain.Entities;
using Ekite.Application.DTOs.DirectorDto;

namespace Ekite.Application.AutoMapper
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<UpdateEmployeeDto, Employee>().ReverseMap();
            CreateMap<CreateSpendDto, Spend>().ReverseMap();
            CreateMap<ResultSpendDto, Spend>().ReverseMap();
            CreateMap<UpdateSpendDto, Spend>().ReverseMap();

            CreateMap<UpdateDirectorDto, Director>().ReverseMap();


            CreateMap<ResultSpendDto, Spend>().ReverseMap().ForMember(x => x.Currency, x => x.MapFrom(x => EnumDescriber.Description(x.Currency))).ForMember(x => x.ApprovalStatus, x => x.MapFrom(x => EnumDescriber.Description(x.ApprovalStatus))).ForMember(x => x.SpendType, x => x.MapFrom(x => EnumDescriber.Description(x.SpendType)));

            CreateMap<Leave, CreateLeaveDTO>().ReverseMap();
            CreateMap<Leave, UpdateLeaveDTO>().ReverseMap();


            CreateMap<ResultPendingLeaveDTO,Leave >().ReverseMap();

            CreateMap<CreateAdvanceDTO, Advance>().ReverseMap();

            CreateMap<UpdateAdvanceDTO, Advance>().ReverseMap();
            CreateMap<ResultAdvanceDTO, Advance>().ReverseMap();

            CreateMap<ResultAdvanceDTO, Advance>().ReverseMap().ForMember(x => x.AdvanceType, x => x.MapFrom(x => EnumDescriber.Description(x.AdvanceType))).ForMember(x => x.Currency, x => x.MapFrom(x => EnumDescriber.Description(x.Currency))).ForMember(x => x.ApprovalStatus, x => x.MapFrom(x => EnumDescriber.Description(x.ApprovalStatus)));
        }

    }
}
