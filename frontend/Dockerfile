FROM node:21-slim as build

RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  curl \
  git \
  bash \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000 || cat /root/.yarn/logs/*.log

COPY . .

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]