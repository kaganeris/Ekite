using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Entities
{
	public class Company : IBaseEntity
	{
		public Company()
		{
			Employees = new List<Employee>();
			Directors = new List<Director>();
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public DateTime? DeletedDate { get; set; }
		public Status Status { get; set; }
		public List<Employee> Employees { get; set; }
		public List<Director> Directors { get; set; }
	}

}
