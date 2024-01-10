using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ekite.Persistence.Migrations
{
    public partial class spend_add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Companies_CompanyId",
                table: "Employees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Companies",
                table: "Companies");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bff1ac1b-3fd1-4238-8420-5f8c2acb0664");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd30d9b7-018c-4bd1-bed6-712e7219ed59");

            migrationBuilder.RenameTable(
                name: "Companies",
                newName: "Company");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Company",
                table: "Company",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Spend",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    ApprovalStatus = table.Column<int>(type: "int", nullable: false),
                    Currency = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    EmployeeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spend", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Spend_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Spend_EmployeeId",
                table: "Spend",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Company_CompanyId",
                table: "Employees",
                column: "CompanyId",
                principalTable: "Company",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Company_CompanyId",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "Spend");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Company",
                table: "Company");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4df989ea-14b1-498a-804e-dbd3d0646fd3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5bd6ae1c-1db2-41f6-9118-0424ab19a28e");

            migrationBuilder.RenameTable(
                name: "Company",
                newName: "Companies");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Companies",
                table: "Companies",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "bff1ac1b-3fd1-4238-8420-5f8c2acb0664", "538e8748-c523-4bfe-826c-129850941f30", "Admin", "ADMIN" },
                    { "fd30d9b7-018c-4bd1-bed6-712e7219ed59", "1e2a1ecf-c828-48ea-9357-8fd393d116d6", "Employee", "EMPLOYEE" }
                });

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 477, DateTimeKind.Local).AddTicks(7528));

            migrationBuilder.UpdateData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 477, DateTimeKind.Local).AddTicks(7539));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 477, DateTimeKind.Local).AddTicks(8599));

            migrationBuilder.UpdateData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 477, DateTimeKind.Local).AddTicks(8603));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 478, DateTimeKind.Local).AddTicks(6196));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 1, 4, 12, 9, 33, 478, DateTimeKind.Local).AddTicks(6201));

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Companies_CompanyId",
                table: "Employees",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
