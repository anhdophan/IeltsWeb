using api.Interfaces;
using api.Repository;
using api.Respository;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add NewtonsoftJson to prevent reference loop issues
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

// Cấu hình CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.WithOrigins("http://localhost:5174") // Địa chỉ frontend
                  .AllowAnyHeader() // Cho phép bất kỳ header nào
                  .AllowAnyMethod(); // Cho phép mọi phương thức HTTP (GET, POST, PUT, DELETE,...)
        });
});

var app = builder.Build();

// Use CORS
app.UseCors("AllowSpecificOrigin");

// Connect to the database
builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Register Repositories
builder.Services.AddScoped<ICourseReponsitory, CourseReponsitory>();
builder.Services.AddScoped<ICommentReponsitory, CommentReponsitory>();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS (Ensure this is placed before app.UseAuthorization)
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
