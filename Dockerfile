FROM nginx:alpine

COPY index.html overrides.css interactions.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
