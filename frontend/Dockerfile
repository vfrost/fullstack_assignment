FROM node:latest as build
WORKDIR /frontend
COPY . .
RUN npm install -g parcel@next
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]