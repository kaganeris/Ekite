using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class ad_column_spendType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0be294ca-11c4-4494-bd2d-6cadd3dbf35f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3229728-80f8-404c-8246-8a80990e3345");

            migrationBuilder.AddColumn<int>(
                name: "SpendType",
                table: "Spend",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "46bc9174-20c6-4f09-996b-3e3bb9157efa", "9860b65f-7cc2-42a0-ba35-df77ca255fba", "Employee", "EMPLOYEE" },
                    { "9ea2c3ec-7f00-4b5b-a575-a57736fa8cbb", "2270101d-cd1d-40ea-88ea-dec73c5ee749", "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 819, DateTimeKind.Local).AddTicks(9109));

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 819, DateTimeKind.Local).AddTicks(9121));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 820, DateTimeKind.Local).AddTicks(583));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 820, DateTimeKind.Local).AddTicks(593));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 821, DateTimeKind.Local).AddTicks(1473));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 21, 33, 6, 821, DateTimeKind.Local).AddTicks(1480));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "46bc9174-20c6-4f09-996b-3e3bb9157efa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9ea2c3ec-7f00-4b5b-a575-a57736fa8cbb");

            migrationBuilder.DropColumn(
                name: "SpendType",
                table: "Spend");

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
    }
}
