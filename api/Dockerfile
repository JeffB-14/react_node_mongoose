# Specify a base image
FROM node:13.12.0-alpine AS alpine
WORKDIR /app
# Install dependencies
COPY package.json .
COPY package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 80
# Default command
CMD ["npm", "run", "start"]