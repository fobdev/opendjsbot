import { REST, Routes } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

(async () => {
    const commands = [
        {
            name: "ping",
            description: "Replies with Hello World!",
        },
    ];

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);

    try {
        console.log("[SLASH COMMANDS] REFRESHING COMMANDS");

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), { body: commands });

        console.log("[SLASH COMMANDS] FINISHED SUCESSFULLY");
    } catch (error) {
        console.error(`[SLASH COMMANDS] ${error}`);
    }
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        switch (interaction.commandName) {
            case "ping":
                await interaction.reply("Hello World!");
                break;
        }
    });

    client.on("ready", () => {
        console.log(`Bot is Online! [${client.user!.tag}]`);
    });

    client.login(process.env.BOT_TOKEN!);
})();
