import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../models/command";

export const ping: Command = {
  name: "ping",
  description: "Returns \"pong\"!",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "Pong!";

    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
};

export const exit: Command = {
  name: "exit",
  description: "Shuts the bot down.",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    client.destroy();
    process.exit();
  }
};
