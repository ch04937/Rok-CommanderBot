// features
const eightBall = require("./miscellaneous/eightBall");
const sunTzu = require("./miscellaneous/sunQoute");
const donate = require("./miscellaneous/donate");
const poll = require("./miscellaneous/poll");
const update = require("./miscellaneous/update");

const castle = require("./rokAssets/castle");
const upgrade = require("./rokAssets/cityHall");
const commander = require("./rokAssets/commander");

// help command
let descriptions = "";
const errMessage =
	"Sorry maybe you spelled the command wrong. Or we havent updated that command yet! If you need help with the command run '!bot'. If you need further assistance @ the clan leader";

const commands = [
	commander,
	eightBall,
	sunTzu,
	upgrade,
	poll,
	donate,
	castle,
	update,
].reduce((all, cmd) => {
	cmd.triggers.forEach(trigger => (all[trigger] = cmd.handler));
	descriptions += `**${cmd.name}** - ${cmd.description}
Usage: ${cmd.triggers.map(t => "!" + t).join(" or ")} ${cmd.example || ""}

`;
	return all;
}, {});

const allCommands = message => {
	return message.channel.send(descriptions);
};

commands["bot"] = allCommands;

module.exports = {
	handle: (command, message) => {
		message.content.toLowerCase(); // case sensitive words
		// checks if message was sent by a bot
		if (message.author.bot) return;
		if (command && commands[command]) {
			commands[command](message);
		} else {
			message.channel.send(`${errMessage}`);
		}
	},
};
