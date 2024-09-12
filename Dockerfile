FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 83

CMD ["npm", "start"]

