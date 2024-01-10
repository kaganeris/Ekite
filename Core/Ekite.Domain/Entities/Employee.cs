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
	public class Employee : IBaseEntity
	{

        public Employee()
        {
			Leaves = new List<Leave>();
			Advances = new List<Advance>();
        }

        public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		[NotMapped]
		public string? FullName { get { return FirstName + " " + LastName; } }
		//[NotMapped]
		//public string FullName => FirstName + " " + LastName;
		public string? SecondName { get; set; }
		public string? SecondLastName { get; set; }
		public DateTime BirthDate { get; set; }
		public string TCNO { get; set; } //TC NUMARASI
		public string BirthPlace { get; set; }
		public DateTime HireDate { get; set; }
		public DateTime? LeavingDate { get; set; }
		public string PhoneNumber { get; set; }
		public string Address { get { return AddressDetail + " " + District.ToUpper() + "/" + City.ToUpper(); } }
		public string City { get; set; }
		public string District { get; set; }
		public string AddressDetail { get; set; }
		public decimal Salary { get; set; }
		public string? ImagePath { get; set; }
		[NotMapped]
		public IFormFile UploadPath { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? DeletedDate { get; set; }
		public Status Status { get; set; }

		//NAVİGATİON
		public int JobId { get; set; }
		public Job Job { get; set; }
		public int DepartmentId { get; set; }
		public Department Department { get; set; }
		public int CompanyId { get; set; }
		public Company Company { get; set; }
		public string AppUserId { get; set; }
		public AppUser AppUser { get; set; }


        public List<Leave> Leaves { get; set; }
    

        public List<Advance> Advances { get; set; }


    

		public List<Spend> Spends { get; set; } = new();
	}


}
