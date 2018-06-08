FROM node:10.4.0-alpine

RUN mkdir /app

WORKDIR /app

COPY yarn.lock package.json /app/

RUN yarn

COPY .env .babelrc.js .eslintignore .eslintrc.js aliases.config.js graphql.config.json vue.config.js /app/
COPY public /app/public
COPY tests /app/tests
COPY src /app/src

RUN yarn build
