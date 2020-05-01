FROM node:12.16.2-alpine3.9

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node yarn.lock package.json ./

RUN yarn 

RUN ls node_modules

COPY --chown=node:node . .

CMD ["yarn", "start:local"]