FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN next build
RUN next start

EXPOSE 83
