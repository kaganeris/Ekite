using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.DTOs.SiteOwnerDto
{
    public class UpdateSiteOwnerDto
    {
        public string? ImagePath { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string AddressDetail { get; set; }
        public string PhoneNumber { get; set; }
        public IFormFile UploadPath { get; set; }
    }
}
