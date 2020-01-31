FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/default.conf /etc/nginx

COPY ./dist/Netflix/ /usr/share/nginx/html

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]