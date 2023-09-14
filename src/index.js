const Discord = require("discord.js");
const client = new Discord.Client({
	intents: 3243773,
});
require("dotenv").config();
const { DISCORD_TOKEN } = process.env;

client.on("ready", () => {
	console.log(`Bot ${client.user.tag} Ready`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === "ping") {
		await interaction.reply("Pong!");
	}
});

client.login(DISCORD_TOKEN);
