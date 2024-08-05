# Build Stage
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve Stage
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /src/app/build /usr/share/nginx/html

# Expose the port that Nginx will serve on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
