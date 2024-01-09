using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class son : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3da0605d-151b-4dd5-8811-cb1e04a382c8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0638028-7d62-41b0-9bfa-e3fe0a94f906");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "466005d4-d600-4786-b4cc-b24debca420f", "b743de5f-5c0c-47e7-b259-d59d54620d90", "Employee", "EMPLOYEE" },
                    { "95cf6178-f664-4ce9-bf54-5c6c97fae91f", "04d307eb-69ff-45a5-ba9f-4950e30b34ab", "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 127, DateTimeKind.Local).AddTicks(3651));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 127, DateTimeKind.Local).AddTicks(3662));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 127, DateTimeKind.Local).AddTicks(4777));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 127, DateTimeKind.Local).AddTicks(4781));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 128, DateTimeKind.Local).AddTicks(2191));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 19, 19, 48, 128, DateTimeKind.Local).AddTicks(2197));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "466005d4-d600-4786-b4cc-b24debca420f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "95cf6178-f664-4ce9-bf54-5c6c97fae91f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3da0605d-151b-4dd5-8811-cb1e04a382c8", "daae81d0-0dc2-4961-ad17-30bbf65b60f9", "Admin", "ADMIN" },
                    { "b0638028-7d62-41b0-9bfa-e3fe0a94f906", "b18cb4c4-ef87-4c3c-9607-61b4d5cb6bbd", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 743, DateTimeKind.Local).AddTicks(4984));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 743, DateTimeKind.Local).AddTicks(4995));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 743, DateTimeKind.Local).AddTicks(6085));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 743, DateTimeKind.Local).AddTicks(6171));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 744, DateTimeKind.Local).AddTicks(3385));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 14, 20, 29, 744, DateTimeKind.Local).AddTicks(3394));
        }
    }
}
