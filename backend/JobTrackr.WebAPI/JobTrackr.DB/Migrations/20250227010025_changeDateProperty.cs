using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobTrackr.DB.Migrations
{
    /// <inheritdoc />
    public partial class changeDateProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Applications",
                newName: "CreatedAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Applications",
                newName: "Date");
        }
    }
}
