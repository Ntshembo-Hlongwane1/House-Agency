FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i

ADD . .

RUN npm run build

COPY .env ./dist/

WORKDIR /usr/app/dist

EXPOSE 5000

CMD node server.js



