cp ./nginx/default.conf /etc/nginx/default.d/default.conf
nginx -t -c /etc/nginx/default.d/default.conf -s reload