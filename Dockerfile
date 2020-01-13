FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

RUN rm /etc/nginx/conf.d/examplessl.conf

COPY ./nginx/default.conf /etc/nginx

COPY ./dist/Netflix/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]