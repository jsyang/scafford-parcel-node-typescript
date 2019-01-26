FROM node:10
WORKDIR /usr/dist

COPY package.json ./
RUN yarn i --only-production

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]


