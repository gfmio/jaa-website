FROM alpine:edge

RUN apk --update upgrade
RUN apk add nodejs nodejs-npm

COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 3000:3000
CMD [ "npm", "start" ]
