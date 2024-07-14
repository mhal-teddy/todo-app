FROM node:22.4.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]