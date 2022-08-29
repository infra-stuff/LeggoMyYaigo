import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { clientId, guildId } from "../data/config.json";

const commands = [
    new SlashCommandBuilder()
        .setName("dump")
        .setDescription("Dump all messages from a channel to stdout")
        .addStringOption((option) =>
            option.setName("channelid").setDescription("The channel to dump").setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("messageid")
                .setDescription("will dump all messages after his one")
                .setRequired(false)
        ),
].map((command) => command.toJSON());

const token = process.env.DISCORD_TOKEN;
if (!token) {
    throw new Error("DISCORD_TOKEN environment variable not found");
}
const rest = new REST({ version: "10" }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
