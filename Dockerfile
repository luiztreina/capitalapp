# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files to container
COPY . .

# Install dependencies
RUN npm install

# Expose port 8080
EXPOSE 8080

# Start the HTTP server
CMD ["npm", "run", "server"]
