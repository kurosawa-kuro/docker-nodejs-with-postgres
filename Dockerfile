FROM node:8-alpine

ADD . src/

WORKDIR /src

RUN npm i -g nodemon

RUN npm i 

CMD npm start