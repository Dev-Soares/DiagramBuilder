
FROM node:lts

WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install

COPY . .


EXPOSE 80 


CMD ["npm", "run", "dev"]