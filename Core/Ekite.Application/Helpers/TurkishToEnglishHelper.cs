using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Helpers
{
    public static class TurkishToEnglishHelper
    {
        public static string NormalizeTurkishCharacters(string input)
        {
            input = input.ToLower();

            for (int i = 0; i < input.Length; i++)
            {
                switch (input[i])
                {
                    case 'ğ':
                        input = input.Replace(input[i], 'g');
                        break;
                    case'ı':
                            input = input.Replace(input[i], 'i');
                        break;
                    case 'ç':
                        input = input.Replace(input[i], 'c');
                        break;
                    case 'ü':
                        input = input.Replace(input[i], 'u');
                        break;
                    case 'ö':
                        input = input.Replace(input[i], 'o');
                        break;
                    case 'ş':
                        input = input.Replace(input[i], 's');
                        break;
                    default:
                        break;
                }
            }

            return input;
        }
    }
}
