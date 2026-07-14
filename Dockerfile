# syntax=docker/dockerfile:1

# --- Stage 1: install production dependencies ---
FROM node:26-alpine AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# --- Stage 2: runtime ---
FROM node:26-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copy installed dependencies and application code
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY package.json LICENSE ./
COPY app ./app

# Run as the built-in unprivileged "node" user
USER node

EXPOSE 3000
CMD [ "node", "app/server.js" ]
