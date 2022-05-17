# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.15.0-buster-slim as builder
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

FROM nginx:1.21.6
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
