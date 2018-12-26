# base image
FROM node:10.14.2-alpine

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN yarn

# bundle app source
COPY . .

# exposing the server port 3000
EXPOSE 3000

# start app
CMD ["yarn", "start"]
