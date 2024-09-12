FROM node:20-alpine as prod

WORKDIR /app
COPY package*.json ./
EXPOSE 83
RUN next build
RUN next start
