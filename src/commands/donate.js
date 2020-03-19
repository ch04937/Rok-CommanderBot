module.exports = {
	name: "Donate",
	description: "Donations are not expected but are appreciated.",
	triggers: ["donate"],
	handler: message => {
		return message.channel.send(
			`${message.author} Thank you, for wanting to help support the developer. Join my patreon. \n\nhttps://www.patreon.com/silent_hero`
		);
	},
};
