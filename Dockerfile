FROM node:10.4.0-alpine

RUN mkdir /app

WORKDIR /app

COPY yarn.lock .env package.json /app/

RUN yarn

COPY src public /app/

RUN yarn build
