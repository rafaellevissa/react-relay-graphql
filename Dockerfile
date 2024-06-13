FROM node:22-alpine3.19 AS builder

WORKDIR /opt/app

COPY package*.json .

RUN npm i && npm i -g serve

COPY . .

RUN npm run build

ENTRYPOINT [ "serve", "./dist", "-l", "tcp://0.0.0.0:5173"]

