import { Client, REST, Routes } from "discord.js";
import { commandLoader } from "./commands/_commandlist";

export const initClient = async (client: Client, testing: boolean) => {
  const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);

  try {
    console.log("[PROCESS] Refreshing slash commands...");

    Routes.applicationGuildCommands;

    if (testing)
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID!,
          process.env.TEST_GUILD!
        ),
        { body: commandLoader(true) }
      );
    else
      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
        body: commandLoader(true),
      });

    console.log("[SUCCESS] Slash commands refreshed successfully");
  } catch (error) {
    console.error(`[ERROR] ${error}`);
  }

  client.on("ready", () => {
    console.log(`Bot is Online! [${client.user!.tag}]`);
  });

  client.login(process.env.BOT_TOKEN!);
};
