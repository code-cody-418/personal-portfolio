FROM nginx
COPY public-html /var/www/public-html
COPY nginx.conf /etc/nginx/nginx.conf