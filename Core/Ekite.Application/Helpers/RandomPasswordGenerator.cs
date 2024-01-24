using Org.BouncyCastle.Asn1.X500;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Helpers
{
    public static class RandomPasswordGenerator
    {
       public static string Generate()
        {
            string metin = "";

            for (int j = 0; j < 8; j++)
            {
                Random rnd = new Random();
                int random = rnd.Next(0, 4);

                if (random == 0)
                {
                    char rastgeleOzelKarakter = (char)rnd.Next(33, 48);
                    metin += rastgeleOzelKarakter;
                }
                else if (random == 1)
                {
                    int rastgeleRakam = rnd.Next(0, 10);
                    metin += rastgeleRakam.ToString();
                }
                else if (random == 2)
                {
                    char rastgeleBuyukHarf = (char)rnd.Next(65, 91);
                    metin += rastgeleBuyukHarf;
                }
                else if (random == 3)
                {
                    char rastgeleKucukHarf = (char)rnd.Next(97, 122);
                    metin += rastgeleKucukHarf;
                }
            }

            return metin;
        }
    }
}
