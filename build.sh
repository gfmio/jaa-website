#!/bin/bash

cd ./api && npm install && npm run build && docker build --tag="jaa:api" . && cd ..
cd ./website && npm install && webpack && docker build --tag="jaa:website" . && cd ..
