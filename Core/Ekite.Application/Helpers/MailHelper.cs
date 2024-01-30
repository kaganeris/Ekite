using MimeKit;
using MailKit.Net.Smtp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Helpers
{
    public static class MailHelper
    {
        public static void SendRenewPassword(string email, int code)
        {
            MimeMessage mimeMessage = new MimeMessage();
            MailboxAddress mailboxAddressFrom = new MailboxAddress("Ekite Admin", "projemaka@gmail.com"); // Mailin kimden gideceği!
            MailboxAddress mailboxAddressTo = new MailboxAddress("User", email);

            mimeMessage.From.Add(mailboxAddressFrom);
            mimeMessage.To.Add(mailboxAddressTo);

            var bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = "Şifre yenileme işlemini gerçekleştirmek için onay kodunuz: " + code;
            mimeMessage.Body = bodyBuilder.ToMessageBody();

            mimeMessage.Subject = "Şifre Yenileme";

            SmtpClient client = new SmtpClient();
            client.Connect("smtp.gmail.com", 587, false);
            client.Authenticate("projemaka@gmail.com", "wvgdopwbgegdlgcl");
            client.Send(mimeMessage);
            client.Disconnect(true);
        }

        public static void SendNewEmpInfo(string email, string password)
        {
            MimeMessage mimeMessage = new MimeMessage();
            MailboxAddress mailboxAddressFrom = new MailboxAddress("Ekite Admin", "projemaka@gmail.com"); // Mailin kimden gideceği!
            MailboxAddress mailboxAddressTo = new MailboxAddress("User", email);

            mimeMessage.From.Add(mailboxAddressFrom);
            mimeMessage.To.Add(mailboxAddressTo);

            var bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = "Kullanıcı adınız E-Mail adresinizdir: " + email + "\nŞifreniz: " + password;
            mimeMessage.Body = bodyBuilder.ToMessageBody();

            mimeMessage.Subject = "Hoşgeldiniz!";

            SmtpClient client = new SmtpClient();
            client.Connect("smtp.gmail.com", 587, false);
            client.Authenticate("projemaka@gmail.com", "wvgdopwbgegdlgcl");
            client.Send(mimeMessage);
            client.Disconnect(true);
        }

    }
}
