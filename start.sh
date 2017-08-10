#!/bin/sh

# Run the MongoDB container
docker stop mongodb
docker rm mongodb
docker run --name mongodb \
  -v $MONGODB_DATA_PATH:/data/db \
  -p 27017:27017 \
  -d \
  mongo:3.3.12 mongod --auth

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
  -e HOST=$WEB_HOST \
  -e PORT=$WEB_PORT \
  -e STRIPE_PUBLIC_KEY=$STRIPE_PUBLIC_KEY \
  -p 8000:3000 \
  -d \
  jaa:website

# Run the JAA api
docker stop jaa-api
docker rm jaa-api
docker run --name jaa-api \
  --link mongodb \
  --link redis \
  -p 8001:3001 \
  -e HTTP_HOST=$API_HOST \
  -e HTTP_PORT=$API_PORT \
  -e MONGODB_HOST=mongodb \
  -e MONGODB_PORT=27017 \
  -e MONGODB_DATABASE=$MONGODB_DATABASE \
  -e MONGODB_USERNAME=$MONGODB_USERNAME \
  -e MONGODB_PASSWORD=$MONGODB_PASSWORD \
  -e PASSPORT_LOGIN_REDIRECT_URL=$PASSPORT_LOGIN_REDIRECT_URL \
  -e PASSPORT_GOOGLE_CALLBACK_URL=$PASSPORT_GOOGLE_CALLBACK_URL \
  -e PASSPORT_GOOGLE_CLIENT_ID=$PASSPORT_GOOGLE_CLIENT_ID \
  -e PASSPORT_GOOGLE_CLIENT_SECRET=$PASSPORT_GOOGLE_CLIENT_SECRET \
  -e STRIPE_PUBLIC_KEY=$STRIPE_PUBLIC_KEY \
  -e STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY \
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
