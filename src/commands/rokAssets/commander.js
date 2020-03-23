const heroes = require("./embeds/heroEmbed"); //commander embet info/data
const options = {
	gather: 1,
	nuke: 2,
	rally: 3,
	cavalry: 4,
	archer: 5,
	garrison: 6,
	infantry: 7,
	mobility: 9,
	flag: 10,
};
const key = Object.keys(heroes.names);
module.exports = {
	name: "Commanders",
	description:
		"Gives optimal ways to play a specific commander. Talent trees, and best pairings. You have to give the first name of the commander ",
	triggers: ["tree"],
	handler:
		("message",
		message => {
			const msg = message.content;
			const msgs = message.channel;
			// get suffix from commands
			var n = msg.split(" ");
			const suffix = n[n.length - 1];

			// loop through bd to look for the key when found return with embed
			for (let i = 0; i < key.length; i++) {
				if (msg === `!tree ${key[i]} ${suffix}`) {
					return msgs.send({
						embed: heroes.names[key[i] + options[suffix]],
					});
				} else if (msg === `!tree ${key[i]}`) {
					return msgs.send({
						embed: heroes.names[key[i]],
					});
				}
			}
		}),
};
