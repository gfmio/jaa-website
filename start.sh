#!/bin/sh

# Run the MongoDB container
docker stop mongodb
docker rm mongodb
docker run --name mongodb \
  -p 27017:27017 \
  -d \
  mongo:3.3.12

# Run the Redis container
docker stop redis
docker rm redis
docker run --name redis \
  -p 6379:6379 \
  -d \
  redis:3.0.7

# Run the JAA website
docker stop jaa-website
docker rm jaa-website
docker run --name jaa-website \
  -p 8000:3000 \
  -d \
  jaa:website

# Run the JAA api
docker stop jaa-api
docker rm jaa-api
docker run --name jaa-api \
  --link mongodb \
  --link redis \
  -p 8001:3000 \
  -e MONGODB_HOST=mongodb \
  -e MONGODB_PORT=27017 \
  -e MONGODB_DATABASE=test \
  -e REDIS_HOST=redis \
  -e REDIS_PORT=6379 \
  -d \
  jaa:api

# Run the updater

killall nodejs
cd updater
rm -rf node_modules
npm install
npm start &
cd ..
