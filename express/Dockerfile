FROM node:10.4.0-alpine

RUN mkdir /app

WORKDIR /app

COPY yarn.lock package.json /app/

RUN yarn

COPY index.js /app/
COPY src /app/src

CMD node index.js
