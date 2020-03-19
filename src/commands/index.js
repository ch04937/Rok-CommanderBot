// features
const commander = require("./commander");
const eightBall = require("./eightBall");
const sunTzu = require("./sunQoute");
const upgrade = require("./castles");

// help command
let descriptions = "";
const errMessage =
	"Sorry maybe you spelled the command wrong. Or we havent updated that command yet! If you need help with the command run '!bot'. If you need further assistance @silent hero or @vert for assistance";

const commands = [commander, eightBall, sunTzu, upgrade].reduce((all, cmd) => {
	cmd.triggers.forEach(trigger => (all[trigger] = cmd.handler));
	descriptions += `**${cmd.name}** - ${cmd.description}
Usage: ${cmd.triggers.map(t => "!" + t).join(" or ")} ${cmd.example || ""}

`;
	return all;
}, {});

const allCommands = message => {
	return message.channel.send(descriptions);
};

commands["commands"] = allCommands;
commands["bot"] = allCommands;

module.exports = {
	handle: (command, message) => {
		if (command && commands[command]) {
			commands[command](message);
		} else {
			message.channel.send(`${errMessage}`);
		}
	},
};
