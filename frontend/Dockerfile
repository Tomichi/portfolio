FROM node:20.11-alpine3.19 AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH" \
    HUSKY=0 \
    CI=true

RUN apk add --no-cache tini python3 make g++

RUN corepack enable && \
    corepack prepare pnpm@8.15.1 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install


COPY . .

RUN pnpm build && pnpm prune --prod

FROM node:20.11-alpine3.19

WORKDIR /app


RUN apk add --no-cache tini curl

RUN addgroup -S -g 1001 appgroup && \
    adduser -S -u 1001 -G appgroup appuser


COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

RUN chown -R appuser:appgroup /app

USER appuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD curl -f http://127.0.0.1:3000/health || exit 1

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "build/index.js"]