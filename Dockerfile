FROM node:18.17.1 AS builder
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
WORKDIR /app

ARG MONGODB_DB=placeholder
ARG MONGODB_URI=placeholder
ENV MONGODB_DB=$MONGODB_DB
ENV MONGODB_URI=$MONGODB_URI

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:18.17.1-slim
WORKDIR /app
COPY package*.json ./

RUN npm install --production --legacy-peer-deps

COPY --from=builder /app/build ./build
COPY --from=builder /app/config ./config
COPY --from=builder /app/public ./public
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/server ./server
COPY --from=builder /app/src ./src
COPY --from=builder /app/.eslintrc ./
COPY --from=builder /app/.stylelintrc.json ./
COPY --from=builder /app/package.json ./package.json

EXPOSE 5003
ENV NODE_ENV=production
CMD ["npm", "start"]