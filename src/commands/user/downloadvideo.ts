import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../interfaces/Command";
import ytdl from "ytdl-core";

const DownloadVideo: Command = {
  builder: new SlashCommandBuilder()
    .setName("downloadvideo")
    .setDescription("Downloads a Video")
    .addStringOption((option) => {
      return option
        .setRequired(true)
        .setName("video")
        .setDescription("Youtube Video Link");
    }),
  async run(client, interaction) {
    const link = String(interaction.options.get("video")?.value);

    // ytdl(link, { filter: (format) => format.container === "mp4" }).pipe()

    interaction.reply(`inputted: ${link}`);
  },
};

export default DownloadVideo;
