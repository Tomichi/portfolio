FROM --platform=linux/amd64 node:20.11-alpine3.19 AS builder

WORKDIR /app

# Consolidate environment variables
ENV NODE_ENV=production \
    PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH" \
    HUSKY=0 \
    CI=true

# Install only necessary build dependencies
RUN apk add --no-cache tini python3 make g++

# Enable pnpm and prepare it (using specific version for consistency)
RUN corepack enable && \
    corepack prepare pnpm@8.15.1 --activate

# Copy package files first (better layer caching)
COPY package.json ./

# Install dependencies without frozen-lockfile first time
RUN pnpm install --no-frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM --platform=linux/amd64 node:20.11-alpine3.19

WORKDIR /app

# Install only the absolutely necessary runtime dependencies
RUN apk add --no-cache tini curl

# Create non-root user
RUN addgroup -S -g 1001 appgroup && \
    adduser -S -u 1001 -G appgroup appuser

# Copy only necessary files from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

# Install production dependencies only
RUN corepack enable && \
    corepack prepare pnpm@8.15.1 --activate && \
    pnpm install --prod --no-frozen-lockfile && \
    pnpm store prune && \
    rm -rf /pnpm/store

# Set proper ownership
RUN chown -R appuser:appgroup /app

USER appuser

# Healthcheck with improved parameters
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "build"]