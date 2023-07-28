FROM node:14.16.0-alpine3.13
RUN addgroup shop-app && adduser -S -G shop-app shop-app 
USER shop-app
WORKDIR /shop-app 
COPY package*.json .
COPY . . 
RUN npm install
EXPOSE 5173 

CMD ["npm", "run", "dev"]