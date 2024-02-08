import { Client, GatewayIntentBits, Interaction } from "discord.js";
import { initClient } from "./initializer";
import { onInteraction } from "./events/onInteraction";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  await initClient(client, true);

  client.on("interactionCreate", async (interaction: Interaction) => {
    await onInteraction(client, interaction);
  });
})();
