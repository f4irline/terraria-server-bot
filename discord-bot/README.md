# Terraria Server - Discord bot
## Invite link for your bot
https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions={PERMISSIONS}&scope={SCOPE}

## Running in docker
1. Run `docker build --build-arg TERRARIA_BOT_TOKEN=<YOUR DISCORD BOT TOKEN> --tag=terraria-discord-bot .`
2. Run `docker run --rm --name=terraria-discord-bot terraria-discord-bot`