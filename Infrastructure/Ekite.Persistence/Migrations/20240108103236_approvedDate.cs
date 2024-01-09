using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class approvedDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0e16e48a-c76c-4202-b763-f244e75f4b8e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8f6c2927-0eaf-4774-91c0-766150c843c4");

            migrationBuilder.AddColumn<DateTime>(
                name: "ApprovedDate",
                table: "Leaves",
                type: "datetime2",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "ApprovedDate",
                table: "Leaves");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0e16e48a-c76c-4202-b763-f244e75f4b8e", "aa329eaf-4ba6-4045-92e1-433a12b12c2b", "Admin", "ADMIN" },
                    { "8f6c2927-0eaf-4774-91c0-766150c843c4", "ced3e7f0-1843-417f-8086-5c9ef5b951d0", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 784, DateTimeKind.Local).AddTicks(6072));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 784, DateTimeKind.Local).AddTicks(6082));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 784, DateTimeKind.Local).AddTicks(6973));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 784, DateTimeKind.Local).AddTicks(6977));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 785, DateTimeKind.Local).AddTicks(4536));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 5, 10, 30, 48, 785, DateTimeKind.Local).AddTicks(4541));
        }
    }
}
