FROM node:18.14.2-alpine

WORKDIR /backend

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "index.js", ]
