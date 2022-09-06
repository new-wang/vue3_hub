FROM nginx
# COPY dist/ /usr/share/nginx/html/
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY /home/nginx/conf/nginx.conf /etc/nginx/nginx.conf
COPY /home/nginx/conf/conf.d /etc/nginx/conf.d
COPY /home/nginx/log /var/log/nginx
COPY /home/nginx/html /usr/share/nginx/html