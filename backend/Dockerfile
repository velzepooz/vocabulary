FROM node:20.2.0

RUN mkdir -p /usr/src/main
WORKDIR /usr/src/main

ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json package-lock.json ./

RUN npm ci
COPY . .

EXPOSE 8500

CMD ["npm", "run", "start:prod"]
