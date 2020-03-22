//setting environment variables
require("dotenv").config();

//discord requirements
const Discord = require("discord.js");
const client = new Discord.Client();

//env vars
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV;

//all bot commands
const prefix = "!";
const commands = require("./commands/main");

//testing will display in code land and production will display ready for action
client.on("ready", () => {
	console.log(`\nLogged in as ${client.user.tag} \n`);
	if (ver === "production") {
		client.user.setStatus("online");
		client.user.setPresence({
			game: {
				name: "In " + client.guilds.size + " Servers",
				type: "PLAYING",
			},
		});
	} else {
		console.log("in development");
		client.user.setStatus("online");
		client.user.setPresence({
			game: {
				name: "Dev In " + client.guilds.size + " Servers",
				type: "PLAYING",
			},
		});
	}
});

client.on("message", message => {
	if (message.content[0] === prefix) {
		const command = message.content.split(" ")[0].substr(1);
		commands.handle(command, message);
	}
});

client.login(BOT_TOKEN);
