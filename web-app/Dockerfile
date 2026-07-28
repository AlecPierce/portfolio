# Build stage
ARG NODE_VERSION=22.13.0
ARG NGINX_VERSION=alpine3.22

FROM node:${NODE_VERSION} AS build

WORKDIR /web-app

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm install

COPY . .

RUN ng build --configuration=production --output-path=/dist/web-app

# Production stage
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

COPY --from=build /web-app/dist/web-app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
