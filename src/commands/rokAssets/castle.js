// getting embeds
const castle = require("./embeds/castleEmbed");

module.exports = {
	name: "Castle Upgrades",
	description: "Learn information about castle upgrades",
	triggers: ["castle"],
	handler:
		("message",
		message => {
			// loop through object to find key s
			for (let i = 0; i < Object.keys(castle.levels).length; i++) {
				// search for the key
				if (message.content === `!castle ${i + 1}`) {
					//  send the values as embed
					return message.channel.send({
						embed: castle.levels[i + 1],
					});
				}
			}
		}),
};
