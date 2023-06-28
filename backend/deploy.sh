#!/bin/bash

BRANCH="main"

eval "$(ssh-agent)"
git checkout $BRANCH
git pull
sudo docker stop api
sudo docker rm api
sudo docker build -t api .
sudo docker run -d --network=host --name=api api
