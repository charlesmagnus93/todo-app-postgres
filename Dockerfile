# Image source
FROM node:18-alpine

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY package*.json ./

# Then install the NPM module
RUN npm install

# Copy current directory to APP folder
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]