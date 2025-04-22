FROM node:21-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY .yarnrc.yml ./
COPY package.json yarn.lock ./

RUN corepack enable && corepack prepare yarn@1.22.19 --activate

RUN while true; do echo "⏳ installing..."; sleep 60; done & \
    yarn install --frozen-lockfile --network-timeout 600000 --verbose && kill $!

COPY . .
RUN yarn build

#COPY package.json yarn.lock ./
#RUN yarn install --network-timeout 600000 --verbose

#COPY . ./
#RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]