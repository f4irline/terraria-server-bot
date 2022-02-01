import { Client } from "discord.js";
import ready from './listeners/ready';
import interactionCreate from './listeners/interaction_create';

console.log("Bot is starting...");
const token = process.env['TERRARIA_BOT_TOKEN'];
const client = new Client({
  intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
