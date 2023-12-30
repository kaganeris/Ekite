using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.EmployeeDto
{
	public class UpdateEmployeeDto
	{
		public string ImagePath { get; set; }
		public string Address { get; set; }
		public string PhoneNumber { get; set; }

	}
}
