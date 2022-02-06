FROM node:14-alpine as builder

RUN yarn global add gulp@4.0.2

ADD . /meshviewer

RUN cd /meshviewer && yarn

RUN cd /meshviewer && gulp

FROM nginx:1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /meshviewer/build /usr/share/nginx/html/
