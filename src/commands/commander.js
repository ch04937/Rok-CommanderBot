const heroes = require("./rokAssets/heroEmbed"); //commander embet info/data
const options = {
	gather: 1,
	nuke: 2,
	rally: 3,
	cav: 4,
	arch: 5,
	garri: 6,
	infantry: 7,
	mix: 8,
	mobility: 9,
};
const key = Object.keys(heroes.names);
module.exports = {
	name: "Commanders",
	description:
		"Gives optimal ways to play a specific commander. Talent trees, and best pairings. You have to give the first name of the commander ",
	//commands for bot sends name of message and image
	triggers: ["tree"],
	handler:
		("message",
		message => {
			// case sensitive words
			const msg = message.content.toLowerCase();
			//optimazing code more readable
			const msgs = message.channel;
			var n = msg.split(" ");
			const suffix = n[n.length - 1];
			if (message.author.bot) return; // checks if message was sent by a bot
			if (!message.content.startsWith("!tree")) return; //makes so that user needs prefix

			for (let i = 0; i < key.length; i++) {
				if (msg === `!tree ${key[i]} ${suffix}`) {
					msgs.send({
						embed: heroes.names[key[i] + options[suffix]],
					});
				} else if (msg === `!tree ${key[i]}`) {
					msgs.send({
						embed: heroes.names[key[i]],
					});
				}
			}
		}),
};
