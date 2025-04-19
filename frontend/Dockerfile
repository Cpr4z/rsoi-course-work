FROM node:21-alpine as build

RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  libc6-compat \
  curl \
  git \
  bash

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 600000 --verbose

COPY . .

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]