using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Infrastructure.Helpers
{
	public static class GetEnumDescription
	{

		public static string Description(Enum value)

		{

			var field = value.GetType().GetField(value.ToString());

			var attribute = (DisplayAttribute)Attribute.GetCustomAttribute(field, typeof(DisplayAttribute));

			return attribute == null ? value.ToString() : attribute.Name;

		}
	}
}
