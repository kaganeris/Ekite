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
	public class Director:Person,IBaseEntity
	{
		public int Id { get; set; }

		public string AppUserId { get; set; }
		public AppUser AppUser { get; set; }

		[NotMapped]
		public IFormFile UploadPath { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? DeletedDate { get; set; }
		public Status Status { get; set; }

		public int CompanyId { get; set; }
		public Company Company { get; set; }
		public int JobId { get; set; }
		public Job Job { get; set; }
		public int DepartmentId { get; set; }
		public Department Department { get; set; }
	}
}
