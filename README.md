# LeggoMyYaigo

To start this bot from scratch, you'll need to:

1. register some number of commands with the YAIG Discord server
1. start the bot so that it can process commands

This README covers how to do both of these things.

## 0. Prerequisites

```sh
yarn install
yarn build
```

-   Get the Discord token from @casado or @hausdorff, then put it into your
    shell environment, _e.g._,

```sh
export DISCORD_TOKEN=<token>
export CONVEX_ADMIN_KEY=<token>
```

## 1. Register commands with YAIG Discord server

```sh
DISCORD_TOKEN=<token> yarn run register-commands-with-server
```

## 2. Running server locally

```sh
DISCORD_TOKEN=<token> CONVEX_ADMIN_KEY=<token> yarn run dev
```

Once running, you can do something like `/dump <channel-id>`. Discord will route
that request to this running bot, which will respond.
