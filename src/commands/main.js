// features
const eightBall = require("./miscellaneous/eightBall");
const sunTzu = require("./miscellaneous/sunQoute");
const donate = require("./miscellaneous/donate");
const poll = require("./miscellaneous/poll");
const update = require("./miscellaneous/update");
const rps = require("./miscellaneous/rps");

const castle = require("./rokAssets/castle");
const upgrade = require("./rokAssets/cityHall");
const commander = require("./rokAssets/commander");

// help command
let descriptions = "";

const commands = [
	commander,
	eightBall,
	sunTzu,
	upgrade,
	poll,
	donate,
	castle,
	update,
	rps,
].reduce((all, cmd) => {
	cmd.triggers.forEach((trigger) => (all[trigger] = cmd.handler));
	descriptions += `**${cmd.name}** - ${cmd.description}
Usage: ${cmd.triggers.map((t) => "!" + t).join(" or ")} ${cmd.example || ""}

`;
	return all;
}, {});

const allCommands = (message) => {
	return message.channel.send(descriptions);
};

commands["bot"] = allCommands;

module.exports = {
	handle: (command, message) => {
		// checks if message was sent by a bot
		if (message.author.bot) return;
		if (command && commands[command]) {
			commands[command](message);
		}
	},
};
