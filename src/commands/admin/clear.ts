import { SlashCommandBuilder, TextChannel } from "discord.js";
import { Command } from "../../interfaces/Command";

const Clear: Command = {
  builder: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clears the chat.")
    .addIntegerOption((option) => {
      return option
        .setRequired(true)
        .setName("amount")
        .setDescription("The amount of messages");
    }),
  async run(client, interaction) {
    interaction.deferReply({ ephemeral: true });

    const amount = Number(interaction.options.get("amount")?.value);
    const interactionChannel = interaction.channel as TextChannel;

    await interactionChannel!.bulkDelete(amount).then(() => {
      interactionChannel.send(`Cleared ${amount} messages`);
    });
  },
};

export default Clear;
