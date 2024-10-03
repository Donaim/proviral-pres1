
# Use Debian as the base image
FROM debian:bullseye

# Install Node.js and other necessary packages
RUN apt-get update
RUN apt-get -y install curl ca-certificates
RUN apt-get install -y nodejs npm
RUN npm install -g npm@latest

# Set the working directory
WORKDIR /workspace

# Copy over project dependencies and install
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose application port (adjust as necessary)
EXPOSE 3000

# Command to start the application (adjust as necessary)
CMD ["npm", "start"]
