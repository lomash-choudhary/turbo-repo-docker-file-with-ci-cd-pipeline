FROM oven/bun:1

WORKDIR  /usr/src/app

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json
COPY ./bun.lockb ./bun.lockb

COPY ./packages ./packages

COPY ./apps/http-server ./apps/http-server

RUN bun install

EXPOSE 3002

CMD [ "bun", "run", "start:http" ]