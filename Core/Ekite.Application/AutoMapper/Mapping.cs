using AutoMapper;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.DTOs.SpendDto;
using Ekite.Domain.Entities;
using System;
using System.Collections.Generic;
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
			CreateMap<CreateSpendDto, Spend>().ReverseMap();
			CreateMap<ResultSpendDto, Spend>().ReverseMap();
			CreateMap<UpdateSpendDto, Spend>().ReverseMap();

			CreateMap<ResultSpendDto, Spend>().ReverseMap().ForMember(x => x.Currency, x => x.MapFrom(x => Description(x.Currency))).ForMember(x => x.ApprovalStatus, x => x.MapFrom(x => Description(x.ApprovalStatus))).ForMember(x=>x.SpendType, x=>x.MapFrom(x=> Description(x.SpendType)));




		}
		public static string Description(Enum value)

		{

			var field = value.GetType().GetField(value.ToString());

			var attribute = (DisplayAttribute)Attribute.GetCustomAttribute(field, typeof(DisplayAttribute));

			return attribute == null ? value.ToString() : attribute.Name;

		}

	}
}
