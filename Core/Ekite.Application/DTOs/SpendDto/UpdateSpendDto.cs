using Ekite.Domain.Enums;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.SpendDto
{
	public class UpdateSpendDto
	{
        public int Id { get; set; }
        public string? Description { get; set; }
		public Currency? Currency { get; set; }
        public SpendType? SpendType { get; set; }
        public decimal? Amount { get; set; }
     
		public string? ImagePath { get; set; }
        public IFormFile UploadPath { get; set; }
        public int? EmployeeId { get; set; }



    }
}
