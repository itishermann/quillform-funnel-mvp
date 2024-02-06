FROM node:20-alpine AS base
RUN apk update && apk upgrade && apk add --no-cache libc6-compat git

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
RUN corepack enable && corepack prepare pnpm@8.12.1 --activate

FROM base AS builder
WORKDIR /app
RUN pnpm install -g turbo
COPY . .
RUN turbo prune --scope=funnel-onboard --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app
# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
# Build the project
COPY --from=builder /app/out/full .

RUN pnpm install --frozen-lockfile
RUN pnpm turbo run build --filter="funnel-onboard"

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app .

ENV PORT 3000
ENV HOSTNAME 0.0.0.0
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000
CMD pnpm turbo run start --filter=funnel-onboard

