# Sử dụng .NET SDK image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Sử dụng .NET SDK để build ứng dụng
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy toàn bộ source code vào container
COPY ["api/api.csproj", "./api/"]
RUN dotnet restore "./api/api.csproj"

COPY . .
WORKDIR "/api"
RUN dotnet build "api.csproj" -c Release -o /app/build

# Publish ứng dụng
FROM build AS publish
RUN dotnet publish "api.csproj" -c Release -o /app/publish

# Tạo runtime environment để chạy ứng dụng
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "api.dll"]
