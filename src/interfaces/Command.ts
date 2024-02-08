import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
} from "discord.js";

export interface Command {
  builder: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  run: (client: Client, interaction: ChatInputCommandInteraction) => void;
}
