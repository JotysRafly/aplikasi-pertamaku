FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port for frontend
EXPOSE 5173

# Start the Vue development server
CMD ["npm", "run", "dev"]
