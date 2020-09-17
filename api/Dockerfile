# pull official base image
FROM node:13.12.0-alpine AS alpine

# set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json ./
RUN npm install 

# add app
COPY . .

# expose port
EXPOSE 80

# start app
CMD ["npm", "run", "start"]