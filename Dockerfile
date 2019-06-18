FROM node:9
WORKDIR /app
COPY package*.json /app/
RUN npm i -g pm2
RUN npm i
COPY . /app
CMD ["npm", "run", "start:prod"]
