# Use the official Node.js image as build image
FROM node:latest AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Install Apache
FROM httpd:2.4

# Copy Apache-Config
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copy the build output to Apache
COPY --from=build /app /var/www/nextjs

# Expose Port 80
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]
