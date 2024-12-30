# Stage 1: Build the Angular app
FROM node:22 AS build

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
