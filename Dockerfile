FROM node:8.15.0

ENV APP_ROOT /usr/src/app
ENV TZ=Asia/Tokyo

# Create app directory
WORKDIR $APP_ROOT

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g nodemon
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . $APP_ROOT

EXPOSE 3000
CMD [ "npm", "start" ]