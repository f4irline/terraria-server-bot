import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { ping } from "../commands/ping";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: BaseCommandInteraction) => void;
}

export const commands: Command[] = [ping];