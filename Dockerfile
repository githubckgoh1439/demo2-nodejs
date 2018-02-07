FROM node:alpine

# Create app directory
WORKDIR /home/appstudents

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./


# Bundle app source
COPY . .

EXPOSE 4300

CMD [ "npm", "start" ]

