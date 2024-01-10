using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Enums
{
	public enum SpendType
	{
		[Display(Name = "Seyahat Giderleri")]
		SeyahatGiderleri,

		[Display(Name = "Konaklama Giderleri")]
		Konaklama,

		[Display(Name = "Yiyecek-İçecek Giderleri")]
		YiyecekIcecek,

		[Display(Name = "Ofis Malzemeleri")]
		OfisMalzemeleri,

		[Display(Name = "Eğitim Giderleri")]
		Egitim,

		[Display(Name = "Sağlık Giderleri")]
		Saglık,

		[Display(Name = "Yakıt Ve Araç Bakım Giderleri")]
		YakıtVeAracBakimi

	}
}
