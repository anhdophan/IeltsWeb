# Sử dụng .NET SDK image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Sử dụng .NET SDK để build ứng dụng
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy tệp .csproj vào container
COPY ["api/api.csproj", "./api/"]
RUN dotnet restore "./api/api.csproj"

# Copy toàn bộ source code vào container
COPY . .

# Chuyển vào đúng thư mục chứa tệp .csproj trước khi build
WORKDIR "/api"
RUN dotnet build "api.csproj" -c Release -o /api

# Publish ứng dụng
FROM build AS publish
WORKDIR "/api"
RUN dotnet publish "api.csproj" -c Release -o /api

# Tạo runtime environment để chạy ứng dụng
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "api.dll"]
