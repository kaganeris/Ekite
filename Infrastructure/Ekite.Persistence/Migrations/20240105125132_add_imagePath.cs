using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class add_imagePath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4df989ea-14b1-498a-804e-dbd3d0646fd3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5bd6ae1c-1db2-41f6-9118-0424ab19a28e");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "Spend",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0be294ca-11c4-4494-bd2d-6cadd3dbf35f", "2a390812-b35f-43f9-824a-51ea2bf21058", "Employee", "EMPLOYEE" },
                    { "d3229728-80f8-404c-8246-8a80990e3345", "b8ed840a-20cb-4cab-b6f0-26b67f4c6948", "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 517, DateTimeKind.Local).AddTicks(107));

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 517, DateTimeKind.Local).AddTicks(121));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 517, DateTimeKind.Local).AddTicks(3167));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 517, DateTimeKind.Local).AddTicks(3172));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 518, DateTimeKind.Local).AddTicks(3344));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 15, 51, 31, 518, DateTimeKind.Local).AddTicks(3350));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0be294ca-11c4-4494-bd2d-6cadd3dbf35f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3229728-80f8-404c-8246-8a80990e3345");

            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "Spend");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4df989ea-14b1-498a-804e-dbd3d0646fd3", "98726439-8947-4e93-a1da-486c089a0a54", "Admin", "ADMIN" },
                    { "5bd6ae1c-1db2-41f6-9118-0424ab19a28e", "a1f3487f-d2c3-4abc-b1b4-d10a03940702", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 933, DateTimeKind.Local).AddTicks(6692));

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 933, DateTimeKind.Local).AddTicks(6708));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 933, DateTimeKind.Local).AddTicks(8033));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 933, DateTimeKind.Local).AddTicks(8039));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 934, DateTimeKind.Local).AddTicks(8710));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 32, 33, 934, DateTimeKind.Local).AddTicks(8719));
        }
    }
}
