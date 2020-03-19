// getting embeds
const building = require("./rokAssets/castleEmbed");

module.exports = {
	name: "City Hall Upgrades",
	descrition: "Learn information about city/castle to level up",
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
			for (let i = 0; i < Object.keys(building.levels).length; i++) {
				// search for the key
				if (`${msg}` === `!castle ${i + 1}`) {
					//  send the values as embed
					message.channel.send({ embed: building.levels[i + 1] });
				}
			}
		}),
};
