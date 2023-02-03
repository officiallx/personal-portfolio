FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html