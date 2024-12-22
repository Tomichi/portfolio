# Portfolio

A modern, performant portfolio website built with SvelteKit, TypeScript, and Tailwind CSS.

## 🚀 Technologies

- **Framework:** SvelteKit 2.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Build Tool:** Vite
- **Deployment:** Docker
- **Code Quality:** ESLint, Prettier
- **Testing:** Vitest

## 🛠️ Prerequisites

- Node.js >= 20.11
- pnpm >= 8.15.1
- Docker (for containerization)

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

## 🔧 Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint and Prettier checks
- `pnpm format` - Format code with Prettier
- `pnpm check` - Type check with TypeScript
- `pnpm clean` - Clean build artifacts

## 🐳 Docker

Build the Docker image:
```bash
docker build -t portfolio-frontend .
```

Run the container:
```bash
docker run -p 3000:3000 portfolio-frontend
```

## 🧪 Testing

Run tests:
```bash
pnpm test
```

## 📝 Code Style

This project uses ESLint and Prettier for code formatting. Format your code with:
```bash
pnpm format
```

Check code style with:
```bash
pnpm lint
```

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── lib/        # Shared components and utilities
│   ├── routes/     # SvelteKit routes
│   └── app.html    # HTML template
├── static/         # Static assets
├── tests/         # Test files
└── vite.config.ts  # Vite configuration
```

## 🚀 Deployment

1. Build the Docker image:
```bash
docker build -t portfolio-frontend .
```

2. Run in production:
```bash
docker run -p 3000:3000 -e NODE_ENV=production portfolio-frontend
```

## 🔍 Health Check

The application includes a health check endpoint at `/health` that can be used for container orchestration and monitoring.

## ✨ Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Vitest for unit testing

## 📚 Documentation
 todo ...

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💻 by Tomáš Michna | Last Updated: 2024-12-22