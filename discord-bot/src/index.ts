import { Client } from "discord.js";
import ready from './listeners/ready';
import interactionCreate from './listeners/interaction_create';
import 'dotenv/config';
import readline from 'readline';

console.log("Bot is starting...");
const token = process.env['TERRARIA_BOT_TOKEN'];
const client = new Client({
  intents: []
});

ready(client);
interactionCreate(client);

client.login(token);

if (process.stdin.isTTY) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'q') {
      client.destroy();
      process.exit();
    }
  });
}
