using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class add_approvedDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ApprovedDate",
                table: "Spend",
                type: "datetime2",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 963, DateTimeKind.Local).AddTicks(3256));

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 963, DateTimeKind.Local).AddTicks(3268));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 963, DateTimeKind.Local).AddTicks(4605));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 963, DateTimeKind.Local).AddTicks(4609));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 964, DateTimeKind.Local).AddTicks(3121));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 13, 15, 29, 964, DateTimeKind.Local).AddTicks(3126));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApprovedDate",
                table: "Spend");

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 307, DateTimeKind.Local).AddTicks(3176));

            migrationBuilder.UpdateData(
                table: "Company",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 307, DateTimeKind.Local).AddTicks(3189));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 307, DateTimeKind.Local).AddTicks(4599));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 307, DateTimeKind.Local).AddTicks(4603));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 308, DateTimeKind.Local).AddTicks(3667));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 10, 11, 10, 48, 308, DateTimeKind.Local).AddTicks(3676));
        }
    }
}
