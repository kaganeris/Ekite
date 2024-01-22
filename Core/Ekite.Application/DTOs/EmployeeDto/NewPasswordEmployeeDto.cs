using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.EmployeeDto
{
    public class NewPasswordEmployeeDto
    {
        public string AppUserID { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }


    }
}
