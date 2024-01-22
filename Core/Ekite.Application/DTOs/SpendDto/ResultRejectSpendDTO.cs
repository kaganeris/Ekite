using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.SpendDto
{
	public class ResultRejectSpendDTO
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string SpendType { get; set; }
		public string ApprovalStatus { get; set; }
		public string ImagePath { get; set; }
		public decimal Price { get; set; }
		public string Currency { get; set; }
		public string Description { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? ApprovedDate { get; set; }
	
	}
}
