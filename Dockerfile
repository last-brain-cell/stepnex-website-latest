FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
RUN npm start

EXPOSE 83
