FROM node:lts-gallium

ARG TERRARIA_BOT_TOKEN
ENV TERRARIA_BOT_TOKEN=${TERRARIA_BOT_TOKEN}

WORKDIR /discord-bot

COPY package.json yarn.lock /discord-bot/
RUN yarn install --frozen-lockfile

COPY . /discord-bot/
RUN yarn build

RUN ls -la

ENTRYPOINT [ "node", "./build/index.js" ]