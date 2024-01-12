FROM node:18.14.2-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm ci

COPY . /frontend

CMD ["npm", "run", "dev"]