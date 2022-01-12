#------------------------- BUILD STAGE -------------------------#
FROM node:16-alpine3.14 as build

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY . .

# RUN npm run test
RUN npm run build

#------------------------- DEPLOY STAGE -------------------------#
FROM node:16-alpine3.14

ENV PORT=5000 \
    NODE_ENV=production

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node --from=build /home/node/app/dist ./dist

COPY --chown=node:node ./entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/sbin/tini", "-v", "-g", "--", "./entrypoint.sh"]
