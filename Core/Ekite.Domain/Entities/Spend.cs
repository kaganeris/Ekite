using Ekite.Domain.Enums;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
	public class Spend : IBaseEntity
	{
		public int Id { get; set; }
		public string Description { get; set; }
		public ApprovalStatus ApprovalStatus { get; set; }
        public SpendType SpendType { get; set; }
        public Currency Currency { get; set; }
		public decimal Amount { get; set; }

		public DateTime? ApprovedDate { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? DeletedDate { get; set; }
		public Status Status { get; set; }
        public string? ImagePath { get; set; }
		[NotMapped]
		public IFormFile UploadPath { get; set; }


		//Navigation Property

		public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}
