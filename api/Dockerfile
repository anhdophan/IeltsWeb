# Stage 1: Build the project
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy project files
COPY ["api/api.csproj", "./"]

# Restore dependencies
RUN dotnet restore "./api.csproj"

# Copy the remaining source code
COPY . .

# Build and publish the app
RUN dotnet publish "./api.csproj" -c Release -o /app/publish

# Stage 2: Create runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app

# Copy published app from build stage
COPY --from=build /app/publish .

# Set the entry point
ENTRYPOINT ["dotnet", "api.dll"]
