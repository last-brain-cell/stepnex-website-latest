FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN next build
RUN next start

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 83
CMD ["nginx", "-g", "daemon off;"]
