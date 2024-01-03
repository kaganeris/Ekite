using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "51736bba-a1dc-4ea6-9ab5-20e420b353af");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6933f8a3-8670-4145-84a5-d7575df3a5b3");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "36052dea-dff2-4dac-8050-408c23a82e27", "401a088c-967e-4a7c-8790-460854e007d4", "Employee", "EMPLOYEE" },
                    { "81c9cf29-9af7-4aa7-8a6d-7762e0bababf", "940f1659-f4ee-4a29-a627-0173377381a4", "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 893, DateTimeKind.Local).AddTicks(7177));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 893, DateTimeKind.Local).AddTicks(7185));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 893, DateTimeKind.Local).AddTicks(7624));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 893, DateTimeKind.Local).AddTicks(7625));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 894, DateTimeKind.Local).AddTicks(442));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 0, 27, 49, 894, DateTimeKind.Local).AddTicks(445));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "36052dea-dff2-4dac-8050-408c23a82e27");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "81c9cf29-9af7-4aa7-8a6d-7762e0bababf");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "51736bba-a1dc-4ea6-9ab5-20e420b353af", "cfb8d886-5a54-46cf-ab1d-e5efdb3cfb5e", "Admin", "ADMIN" },
                    { "6933f8a3-8670-4145-84a5-d7575df3a5b3", "01f65129-5fb6-47b0-94e4-c882198cf9ab", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 291, DateTimeKind.Local).AddTicks(6254));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 291, DateTimeKind.Local).AddTicks(6263));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 291, DateTimeKind.Local).AddTicks(7275));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 291, DateTimeKind.Local).AddTicks(7280));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 292, DateTimeKind.Local).AddTicks(9085));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 3, 22, 20, 17, 292, DateTimeKind.Local).AddTicks(9094));
        }
    }
}
