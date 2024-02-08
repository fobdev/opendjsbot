import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../interfaces/Command";

const HelloWorld: Command = {
  builder: new SlashCommandBuilder()
    .setName("helloworld")
    .setDescription("Hi!"),
  run(client, interaction) {
    interaction.reply("Hello!");
  },
};

export default HelloWorld;
