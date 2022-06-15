#Specify a base image
FROM node:alpine

WORKDIR /usr/app

#Copy build files
COPY ./package.json ./

#Install some dependencies
RUN npm install

#Copy build files
COPY ./index.js ./

#Default command
CMD ["npm", "start"]