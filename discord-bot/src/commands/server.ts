import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../models/command";
import { exec, ChildProcess } from 'child_process';

let serverProcess: ChildProcess | undefined;

export const startServer: Command = {
  name: "start",
  description: "Starts the terraria server",
  type: "CHAT_INPUT",
  run: async (_client: Client, interaction: BaseCommandInteraction) => {
    const PATH_TO_START_SCRIPT = process.env['PATH_TO_START_SCRIPT'];
    if (!PATH_TO_START_SCRIPT) {
      await interaction.followUp({
        content: 'Could not start server. PATH_TO_START_SCRIPT environment variable is not set.'
      });
      throw new Error('PATH_TO_START_SCRIPT environment variable not set!');
    }

    if (serverProcess) {
      serverProcess.kill();
      serverProcess = undefined;
    }

    serverProcess = exec(`cmd /c "${PATH_TO_START_SCRIPT}"`);

    serverProcess.addListener('spawn', async () => {
      await interaction.followUp({
        ephemeral: true,
        content: 'Server started successfully!',
      });
    });
  }
};

export const stopServer: Command = {
  name: "stop",
  description: "Stops the terraria server",
  type: "CHAT_INPUT",
  run: async (_client: Client, interaction: BaseCommandInteraction) => {
    if (serverProcess) {
      serverProcess.stdin?.write('exit');
      serverProcess.stdin?.end();
      serverProcess = undefined;
      await interaction.followUp({
        ephemeral: true,
        content: 'Server stopped successfully!',
      });
    }
  }
}

export const status: Command = {
  name: "status",
  description: "Returns the status of the server",
  type: "CHAT_INPUT",
  run: async (_client: Client, interaction: BaseCommandInteraction) => {
    serverProcess
      ? await interaction.followUp({
        ephemeral: true,
        content: 'Server is running!',
      })
      : await interaction.followUp({
        ephemeral: true,
        content: 'Server is not running.',
      });
  }
}