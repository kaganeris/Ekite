using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class leaveStartDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2f538ca8-fb4e-4086-966f-c2fca41903df");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f466244e-c179-42c1-8d9b-c7b46618785c");

            migrationBuilder.DropColumn(
                name: "Day",
                table: "Leaves");

            migrationBuilder.AddColumn<DateTime>(
                name: "LeaveEndDate",
                table: "Leaves",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LeaveStartDate",
                table: "Leaves",
                type: "datetime2",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3da0605d-151b-4dd5-8811-cb1e04a382c8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0638028-7d62-41b0-9bfa-e3fe0a94f906");

            migrationBuilder.DropColumn(
                name: "LeaveEndDate",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "LeaveStartDate",
                table: "Leaves");

            migrationBuilder.AddColumn<int>(
                name: "Day",
                table: "Leaves",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2f538ca8-fb4e-4086-966f-c2fca41903df", "98abd98a-ba99-415d-adee-4cc3523c1344", "Employee", "EMPLOYEE" },
                    { "f466244e-c179-42c1-8d9b-c7b46618785c", "c1061705-1f77-4505-80da-6945d9639d35", "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(1183));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(1193));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(2097));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(2100));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(9542));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 8, 13, 32, 36, 349, DateTimeKind.Local).AddTicks(9546));
        }
    }
}
