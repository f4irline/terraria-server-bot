import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { startServer, stopServer, status } from "../commands/server";
import { ping } from "../commands/ping";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: BaseCommandInteraction) => void;
}

export const commands: Command[] = [ping, startServer, stopServer, status];