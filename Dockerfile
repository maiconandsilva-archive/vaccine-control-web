FROM node:latest as builder

COPY . ./app
WORKDIR ./app

RUN yarn install
RUN yarn build

FROM httpd:latest

COPY --from=builder /app/build /usr/local/apache2/htdocs