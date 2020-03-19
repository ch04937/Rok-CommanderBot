// getting embeds
const castle = require("./rokAssets/castleEmbed");

module.exports = {
	name: "Castle Upgrades",
	description: "Learn information about castle upgrades",
	triggers: ["castle"],
	handler:
		("message",
		message => {
			// case sensitive words
			const msg = message.content.toLowerCase();
			// checks if message was sent by a bot
			if (message.author.bot) return;
			if (!message.content.startsWith(`!castle`)) return;
			// loop through object to find key s
			for (let i = 0; i < Object.keys(castle.levels).length; i++) {
				// search for the key
				if (msg === `!castle ${i + 1}`) {
					//  send the values as embed
					message.channel.send({ embed: castle.levels[i + 1] });
				}
			}
		}),
};
