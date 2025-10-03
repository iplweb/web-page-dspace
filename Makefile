# DSpace Website Makefile
# Convenience commands for Next.js development

.PHONY: help install dev build start lint clean test check all

# Default target - show help
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server (port 3000)"
	@echo "  make build    - Build for production"
	@echo "  make start    - Start production server"
	@echo "  make lint     - Run ESLint"
	@echo "  make clean    - Remove build artifacts and node_modules"
	@echo "  make check    - Run lint and build (verify everything works)"
	@echo "  make all      - Clean, install, and build"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# Development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Production build
build:
	@echo "🔨 Building for production..."
	npm run build

# Start production server
start:
	@echo "▶️  Starting production server..."
	npm run start

# Linting
lint:
	@echo "🔍 Running ESLint..."
	npm run lint

# Clean build artifacts and dependencies
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf .next
	rm -rf out
	rm -rf node_modules
	rm -rf .turbo
	@echo "✨ Clean complete"

# Run all checks (lint and build)
check: lint build
	@echo "✅ All checks passed"

# Full rebuild
all: clean install build
	@echo "🎉 Full rebuild complete"

# Quick restart of dev server
restart:
	@echo "🔄 Restarting development server..."
	@pkill -f "next dev" 2>/dev/null || true
	$(MAKE) dev

# Update dependencies
update:
	@echo "📦 Updating dependencies..."
	npm update
	npm audit fix --audit-level=moderate || true

# Analyze bundle size
analyze:
	@echo "📊 Analyzing bundle size..."
	ANALYZE=true npm run build

# Format code (if prettier is configured)
format:
	@echo "✨ Formatting code..."
	npx prettier --write "**/*.{ts,tsx,js,jsx,json,css,md}" 2>/dev/null || echo "Prettier not configured"

# Production preview (build and start)
preview: build start

# Show current git status
status:
	@echo "📋 Git status:"
	@git status --short

# Create a production-ready deployment
deploy-ready: clean install lint build
	@echo "🚀 Project is ready for deployment!"
	@echo "   Build artifacts are in .next/"