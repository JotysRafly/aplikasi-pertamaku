# Dockerfile for frontend
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 5173

# Start the Vue application
CMD ["npm", "run", "dev"]
