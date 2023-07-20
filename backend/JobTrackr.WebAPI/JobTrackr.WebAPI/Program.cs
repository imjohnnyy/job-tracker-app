using Applications.Core;
using JobTrackr.DB;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;

using System;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add AppDbContext as a service
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DB_CONNECTION_STRING"));
});

// Add IApplicationsService as a transient service
builder.Services.AddTransient<IApplicationsServices, ApplicationsServices>();

// Add IUserService as a transient service
builder.Services.AddTransient<IUserService, UserService>();

// Add IPasswordHasher as a transient service
builder.Services.AddTransient<IPasswordHasher, PasswordHasher>();


builder.Services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();



builder.Services.AddCors(options =>
{
    options.AddPolicy("ApplicationsPolicy", builder =>
    {
        builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
    });
});

var secret = Environment.GetEnvironmentVariable("JWT_SECRET");
var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");


// Configure JWT bearer authentication
builder.Services.AddAuthentication(opts =>
{
    opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opts.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(opts =>
    {
        opts.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidIssuer = issuer,
            ValidateAudience = false,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret))
        };
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.CustomSchemaIds(type => type.ToString());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("ApplicationsPolicy");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
