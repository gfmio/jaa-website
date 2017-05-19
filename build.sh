#!/bin/bash

cd ./api && docker build --tag="jaa:api" . && cd ..
cd ./website && docker build --tag="jaa:website" . && cd ..
