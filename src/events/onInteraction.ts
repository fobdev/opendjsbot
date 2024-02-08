import { Client, Interaction } from "discord.js";
import { commandLoader } from "../commands/_commandlist";
import { Command } from "../interfaces/Command";

export const onInteraction = async (client: Client, interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const commands: Array<Command> = commandLoader();

  for (const command of commands)
    if (interaction.commandName === command.builder.name) command.run(client, interaction);
};
