#!/bin/sh

docker stop jaa-api
docker rm jaa-api
docker run --name jaa-api --link mongodb --link redis -p 8001:3001 -e HTTP_HOST=$API_HOST -e HTTP_PORT=$API_PORT -e MONGODB_HOST=mongodb -e MONGODB_PORT=27017 -e MONGODB_DATABASE=$MONGODB_DATABASE -e MONGODB_USERNAME=$MONGODB_USERNAME -e MONGODB_PASSWORD=$MONGODB_PASSWORD -e PASSPORT_LOGIN_REDIRECT_URL=$PASSPORT_LOGIN_REDIRECT_URL -e PASSPORT_GOOGLE_CALLBACK_URL=$PASSPORT_GOOGLE_CALLBACK_URL -e PASSPORT_GOOGLE_CLIENT_ID=$PASSPORT_GOOGLE_CLIENT_ID -e PASSPORT_GOOGLE_CLIENT_SECRET=$PASSPORT_GOOGLE_CLIENT_SECRET -e GOOGLE_API_CLIENT_ID=$GOOGLE_API_CLIENT_ID -e GOOGLE_API_CLIENT_SECRET=$GOOGLE_API_CLIENT_SECRET -e STRIPE_PUBLIC_KEY=$STRIPE_PUBLIC_KEY -e STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY -e REDIS_HOST=redis -e REDIS_PORT=6379 -i -t jaa:api
