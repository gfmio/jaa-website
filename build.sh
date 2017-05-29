#!/bin/bash

cd ./api && docker build --tag="growth-mindset:api" . && cd ..
cd ./website && npm install && webpack && docker build --tag="growth-mindset:website" . && cd ..
