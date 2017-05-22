#!/bin/bash

cd ./api && docker build --tag="jaa:api" . && cd ..
cd ./website && npm install && webpack && docker build --tag="jaa:website" . && cd ..
