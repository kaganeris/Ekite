using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.EmployeeDto
{
    public class AllListEmployeeDto
    {
        public int EmployeeID { get; set; }
        public string FullName { get; set; }
        public DateTime BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public string Job { get; set; }
        public string Department { get; set; }
    }
}
