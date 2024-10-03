
# Use Debian as the base image
FROM debian:bullseye

# Install Node.js and other necessary packages
RUN apt-get update \
    && apt-get -y install curl ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

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
