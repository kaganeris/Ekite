using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.AdvanceDto
{
    public class CreateEnumAdvanceDTO
    {

        public CreateEnumAdvanceDTO()
        {
            Currency = new Dictionary<int, string>();
            AdvanceType = new Dictionary<int, string>();
        }
        public Dictionary<int, string> Currency { get; set; }
        public Dictionary<int, string> AdvanceType { get; set; }
    }
}
