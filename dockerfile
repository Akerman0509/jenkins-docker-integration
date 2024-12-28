FROM node:20

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=4173
EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]


