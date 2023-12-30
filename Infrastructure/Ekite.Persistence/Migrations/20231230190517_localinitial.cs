using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class localinitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8aa6edbf-9118-4a06-9469-1bf08b7413ac");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9a8bbf41-89d7-489b-876e-848b2eac0d2a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0f15a15-367b-4b14-ba9f-388072281dd2");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "87e89ef0-2f69-4cb4-aa69-d6e63ab36f1c", "3981295c-6e33-40d2-ba63-77a4325dfc07", "Employee", "EMPLOYEE" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ca51d49e-fcaf-48ba-a2da-6c556daa4b66", "ff224425-3e8d-46f2-9ee7-697c618ae3f0", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "87e89ef0-2f69-4cb4-aa69-d6e63ab36f1c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca51d49e-fcaf-48ba-a2da-6c556daa4b66");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8aa6edbf-9118-4a06-9469-1bf08b7413ac", "6298b07a-9e4b-4998-9c5a-3368f65363d3", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9a8bbf41-89d7-489b-876e-848b2eac0d2a", "25e783cc-d7f4-43e9-9ecc-6884fd56c099", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a0f15a15-367b-4b14-ba9f-388072281dd2", "ad7e8eed-970b-4eda-a6e4-c7df1ac29353", "Author", "AUTHOR" });
        }
    }
}
