# Use the official .NET SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY ["api.csproj", "./"]
RUN dotnet restore "./api.csproj"
COPY . .
RUN dotnet publish -c Release -o /app

# Build a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "api.dll"]
