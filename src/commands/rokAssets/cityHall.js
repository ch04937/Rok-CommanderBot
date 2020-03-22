// getting embeds
const building = require("./embeds/cityEmbed");

module.exports = {
	name: "City Hall Upgrades",
	description: "Learn information about city to level up",
	triggers: ["city"],
	handler:
		("message",
		message => {
			// case sensitive words
			const msg = message.content.toLowerCase();
			// checks if message was sent by a bot
			if (message.author.bot) return;
			if (!message.content.startsWith(`!city`)) return;
			// loop through object to find key s
			for (let i = 0; i < Object.keys(building.levels).length; i++) {
				// search for the key
				if (msg === `!city ${i + 1}`) {
					//  send the values as embed
					message.channel.send({ embed: building.levels[i + 1] });
				}
			}
		}),
};
