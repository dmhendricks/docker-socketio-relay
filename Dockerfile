FROM mhart/alpine-node:10
WORKDIR /usr/src
COPY package*.json LICENSE ./
COPY app app/
RUN yarn --prod
EXPOSE 3000
CMD [ "node", "app/server.js" ]
