FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 27017
# required for docker desktop port mapping

CMD ["node", "app.js"]