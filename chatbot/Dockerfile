From node:18.4.0-alpine

WORKDIR /chatbot

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]