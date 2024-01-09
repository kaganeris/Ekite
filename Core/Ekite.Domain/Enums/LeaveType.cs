using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Domain.Enums
{
    public enum LeaveType
    {
        [Display(Name = "Ücretli İzin")]
        UcretliIzin,
        [Display(Name = "Ücretsiz İzin")]
        UcretsizIzin,
        [Display(Name = "Mazeret İzni")]
        MazeretIzni,
        [Display(Name = "Ölüm İzni")]
        OlumIzni,
        [Display(Name = "Doğum İzni")]
        DogumIzni,
        [Display(Name = "Süt İzni")]
        SutIzni,
        [Display(Name = "Babalık İzni")]
        BabalikIzni,
        [Display(Name = "Yıllık İzin")]
        YillikIzin,
        [Display(Name = "Evlilik İzni")]
        EvlilikIzni,
        [Display(Name = "Refakat İzni")]
        RefakatIzni
    }
}
