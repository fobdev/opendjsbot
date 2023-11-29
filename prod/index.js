"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const discord_js_2 = require("discord.js");
const TOKEN = "MTE3OTQ5MTQwMjM1MTEyNDYwMg.GdraoD.lWDCWpmvwzSdTGpQ2gVpcPjMZxxYTidxKkcuCg";
const CLIENT_ID = "1179491402351124602";
const client = new discord_js_2.Client({ intents: [discord_js_2.GatewayIntentBits.Guilds] });
(() => __awaiter(void 0, void 0, void 0, function* () {
    const commands = [
        {
            name: "ping",
            description: "Replies with Pong!",
        },
    ];
    const rest = new discord_js_1.REST({ version: "10" }).setToken(TOKEN);
    try {
        console.log("Started refreshing application (/) commands.");
        yield rest.put(discord_js_1.Routes.applicationCommands(CLIENT_ID), { body: commands });
        console.log("Successfully reloaded application (/) commands.");
    }
    catch (error) {
        console.error(error);
    }
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isChatInputCommand())
            return;
        if (interaction.commandName === "ping") {
            yield interaction.reply("Pong!");
        }
    }));
    client.login(TOKEN);
}))();
