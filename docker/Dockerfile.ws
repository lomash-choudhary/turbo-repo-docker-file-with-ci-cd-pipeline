FROM oven/bun:1

ARG DATABASE_URL

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb
COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws-server ./apps/ws-server

RUN bun install

EXPOSE 3001

CMD [ "bun" ,"run", "start:ws"]

