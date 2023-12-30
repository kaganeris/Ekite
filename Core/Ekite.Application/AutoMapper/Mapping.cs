using AutoMapper;
using Ekite.Application.VMs.EmployeeVM;
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
            
            CreateMap<ResultSumEmployeeVM,Employee>().ReverseMap();
            CreateMap<ResultDetailEmployeeVM, Employee>().ReverseMap();

        }
    }
}
