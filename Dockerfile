FROM node:18-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat nasm autoconf automake bash 
COPY package*.json yarn.lock ./
ENV NODE_ENV $NODE_ENV
RUN npm install


FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN apk add --no-cache libc6-compat nasm autoconf automake bash 

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "start"]
