FROM node:16-alpine as build

#WORK DIRECTORY inside the image
WORKDIR /app

# COPY .[ALL FILES] .[nside the /app directory]
COPY . .

#RUN commands
RUN yarn
RUN yarn build


#production environment
FROM nginx:stable-alpine 
COPY --from=build /app/build  /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#docker ps
#docker stop <id-from-ps>
#docker system prune -a
#docker build -t nginxreact .