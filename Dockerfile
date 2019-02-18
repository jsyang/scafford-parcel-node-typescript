FROM node:lts-alpine
WORKDIR /usr/app

COPY package.json ./
RUN yarn

COPY . .

EXPOSE 3000
CMD ["node", "dist/app.js"]
