FROM node:latest

COPY . /src
RUN cd /src; npm install

ENV PORT 3000
EXPOSE $PORT

CMD ["node", "/src/app.js"]
