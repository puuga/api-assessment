FROM node:12-alpine

ENV PORT=3030 \
    ENV=dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD [ "npm", "start" ]