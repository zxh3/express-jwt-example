FROM node:18.16.0-alpine3.17
WORKDIR /kiana-server
COPY . .
RUN npm install
CMD [ "npm", "start"]
EXPOSE 5000
