import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../interfaces/Command";

const Ping: Command = {
  builder: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pings the client in milisseconds."),
  run(client, interaction) {
      interaction.reply('ping worked!')
  },
}

export default Ping;