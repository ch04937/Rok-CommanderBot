//setting environment variables
require("dotenv").config();

//discord requirements
const Discord = require("discord.js");
const client = new Discord.Client();

//env vars
const BOT_TOKEN = process.env.BOT_TOKEN;
const RXE_GUILD = process.env.RXE_GUILD;
const TESTING_GUILD = process.env.TESTING_GUILD;
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
// client.on("guildMemberAdd", (member) => {
// 	if (member.guild.id === TESTING_GUILD) {
// 		const channel = member.guild.channels.find(
// 			(channel) => channel.name === "general"
// 		);
// 		if (!channel) return;

// 		const player = {
// 			color: 0xff33e9,
// 			title: `Welcome to the server ${member.user.username}`,
// 			author: {
// 				name: member.user.username,
// 				icon_url: member.user.displayAvatarURL(),
// 			},
// 			description: `Thank you for joining us `,
// 			thumbnail: {
// 				url: member.guild.iconURL(),
// 			},
// 		};
// 		channel.send({ embed: player });
// 	}
// });
client.on("message", (message) => {
	if (message.content[0] === prefix) {
		const command = message.content.split(" ")[0].substr(1);
		commands.handle(command, message);
	}
});

client.login(BOT_TOKEN);
