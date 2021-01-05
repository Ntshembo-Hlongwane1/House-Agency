FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

COPY .env ./dist/

WORKDIR ./dist

EXPOSE 5000

CMD node src/server.js