FROM node:13.5.0
# Create working location
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
