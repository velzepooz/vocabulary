#!/bin/bash

REPOSITORY_NAME="vocabulary/backend"
BRANCH="main"

cd ./$REPOSITORY_NAME || exit 1
eval "$(ssh-agent)"
git checkout $BRANCH
git pull
sudo docker stop api
sudo docker rm api
sudo docker build -t api .
sudo docker run -d --network=host --name=api api
