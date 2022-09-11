# Personal Portfolio (mycodingskillz.com)
FROM node:16 as personal-portfolio
WORKDIR /home/node/public-html/personal-portfolio
COPY ./public-html/personal-portfolio/package*.json ./
RUN npm install --no-optional && npm cache clean --force
COPY ./public-html/personal-portfolio .
RUN npm run build

# MMORPG (starsfloating.com)
FROM node:16 as stars-floating
WORKDIR /home/node/public-html/stars-floating
COPY ./public-html/stars-floating/package*.json ./
RUN npm install --no-optional && npm cache clean --force
COPY ./public-html/stars-floating .
RUN npm run build

# nginx 
FROM nginx:1.22
COPY public-html/saiyan-web-dev /var/www/public-html/saiyan-web-dev
COPY --from=stars-floating /home/node/public-html/stars-floating/dist /var/www/public-html/stars-floating
COPY --from=personal-portfolio /home/node/public-html/personal-portfolio/build /var/www/public-html/personal-portfolio
# COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]