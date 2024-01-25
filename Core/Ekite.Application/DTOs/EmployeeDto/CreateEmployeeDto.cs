using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.EmployeeDto
{
    public class CreateEmployeeDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? SecondName { get; set; }
        public string? SecondLastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string TCNO { get; set; }
        public string BirthPlace { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string AddressDetail { get; set; }
        public string? ImagePath { get; set; }
        public IFormFile UploadPath { get; set; }
        public DateTime HireDate { get; set; }
        public decimal Salary { get; set; }
        public int JobId { get; set; }
        public int DepartmentId { get; set; }
        public int CompanyId { get; set; }
    }
}
