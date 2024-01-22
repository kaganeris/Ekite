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
    public class SiteOwner: Person,IBaseEntity
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
        public Status Status { get; set; }

        [NotMapped]
        public IFormFile UploadPath { get; set; }


        // Navigation
        public int JobId { get; set; }
        public Job Job { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
