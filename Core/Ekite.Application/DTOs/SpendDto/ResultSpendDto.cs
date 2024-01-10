using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.SpendDto
{
	public class ResultSpendDto
	{
        public int Id { get; set; }
        public string Description { get; set; }
		public string ApprovalStatus { get; set; }
        public string SpendType { get; set; }
        public string Currency { get; set; }
		public decimal Amount { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? ApprovedDate { get; set; }
        public string ImagePath { get; set; }


        public int EmployeeId { get; set; }





	}
}
