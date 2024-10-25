FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port for backend
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
