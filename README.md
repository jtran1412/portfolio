# Full Stack Portfolio

A modern portfolio website built with React, TypeScript, and ASP.NET Core.

## Project Structure

```
portfolio/
├── Portfolio.Server/        # ASP.NET Core backend
│   ├── Controllers/        # API controllers
│   ├── Models/            # Data models
│   └── Services/          # Business logic
│
├── client/       # React + TypeScript frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript type definitions
│   └── public/           # Static assets
```

## Prerequisites

- .NET 7.0 SDK
- Node.js (v16 or later)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Portfolio.Server
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Run the backend:
   ```bash
   dotnet run
   ```

The API will be available at `https://localhost:7001`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## Features

- **Interactive UI:** Modern, responsive design with a theme toggle for light and dark modes.
- **Background Music:** Looping background music with a mute toggle.
- **TypeScript:** Type safety for a more robust frontend codebase.
- **ASP.NET Core Backend:** A solid foundation for future API endpoints.
- **Component-Based Architecture:** Reusable and maintainable code.
- **Fast Development with Vite:** Near-instant HMR for a great developer experience.

## Development

- Backend API development: Add new controllers in `Portfolio.Server/Controllers`
- Frontend components: Add new components in `client/src/components`
- Pages: Add new pages in `client/src/pages`
- Styles: Material-UI theming in `client/src/App.tsx`

## Available Scripts

### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (Portfolio.Server/)
- `dotnet run` - Run the application
- `dotnet build` - Build the application
- `dotnet test` - Run tests 