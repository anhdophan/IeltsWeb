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
            policy.WithOrigins("http://localhost:5173", "http://localhost:5174") // Địa chỉ frontend
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Cho phép gửi credentials nếu cần
        });
});

// Connect to the PostgreSQL database
builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Đăng ký SignalR service
builder.Services.AddSignalR();  // Thêm dòng này để đăng ký SignalR

// Register Repositories
builder.Services.AddScoped<ICourseReponsitory, CourseReponsitory>();
builder.Services.AddScoped<ICommentReponsitory, CommentReponsitory>();
builder.Services.AddScoped<ISignUpInforReponsitory, SignUpInforReponsitory>();

// Register SpaStaticFiles to serve SPA static files
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ReactFE/dist"; // Đường dẫn tới build output của ứng dụng React/Angular
});

// Build the app after configuring services
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || !app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseSpaStaticFiles();  // Đảm bảo static files được phục vụ

app.UseHttpsRedirection();

// Use CORS (Ensure this is placed before app.UseAuthorization)
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapHub<ChatHub>("/chatHub");

app.MapControllers();

// Configure SPA (For React or Angular apps)
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ReactFE"; // Đường dẫn đến thư mục ứng dụng SPA
    if (app.Environment.IsDevelopment())
    {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000"); // Nếu đang phát triển React, Angular thì dùng proxy
    }
});

app.Run();
