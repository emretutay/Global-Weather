# Use the official Node.js 14 image as the base image
FROM node:21-bookworm

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Angular CLI and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular application
RUN ng build 

# Expose the port on which the Angular application will run
EXPOSE 4200

# Start the Angular application when the container starts
CMD ["ng", "serve", "--host", "0.0.0.0"]