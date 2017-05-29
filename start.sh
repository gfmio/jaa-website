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

# Run the growth-mindset website
docker stop growth-mindset
docker rm growth-mindset
docker run --name growth-mindset \
  -p 8000:3000 \
  -d \
  growth-mindset:website

# Run the growth-mindset api
docker stop growth-mindset-api
docker rm growth-mindset-api
docker run --name growth-mindset-api \
  --link mongodb \
  --link redis \
  -p 8001:3000 \
  -e MONGODB_HOST=mongodb \
  -e MONGODB_PORT=27017 \
  -e MONGODB_DATABASE=test \
  -e REDIS_HOST=redis \
  -e REDIS_PORT=6379 \
  -d \
  growth-mindset:api

# Run the updater

killall nodejs
cd updater
rm -rf node_modules
npm install
npm start &
cd ..
