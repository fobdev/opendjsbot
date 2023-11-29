import { REST, Routes } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";

const TOKEN = "MTE3OTQ5MTQwMjM1MTEyNDYwMg.GdraoD.lWDCWpmvwzSdTGpQ2gVpcPjMZxxYTidxKkcuCg";
const CLIENT_ID = "1179491402351124602";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

(async () => {
    const commands = [
        {
            name: "ping",
            description: "Replies with Hello World!",
        },
    ];

    const rest = new REST({ version: "10" }).setToken(TOKEN);

    try {
        console.log("[SLASH COMMANDS] REFRESHING COMMANDS");

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

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

    client.login(TOKEN);
})();
