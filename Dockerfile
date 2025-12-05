FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./

RUN \
  if [ -f package-lock.json ]; then \
    npm ci --ignore-scripts; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user with specific UID/GID
RUN addgroup --system --gid 500 nodejs && \
    adduser --system --uid 500 --ingroup nodejs nextjs

# Copy only the necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
