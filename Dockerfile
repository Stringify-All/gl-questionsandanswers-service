FROM node:current-slim
WORKDIR /Users/gabriellabrie/Galvanize/gl-questionsandanswers-service
COPY package.json .
RUN npm install
RUN npm build
WORKDIR /Users/gabriellabrie/Galvanize/gl-questionsandanswers-service
COPY package.json .
RUN npm install
EXPOSE 9002
CMD [ "npm", "start", "build" ]

COPY . .