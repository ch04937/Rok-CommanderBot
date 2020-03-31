module.exports = {
	name: "Updates",
	description: "Changes made in to the bot commands will be added here for",
	triggers: ["updates"],
	handler: message => {
		return message.channel.send(
			`Updates: Changes to commander commands. \nBefore: you were able to make type the first few letters to and get the information. \n\nNow: You have to type the first name of the commander, if the commander has other builds type the what the other build is \n\n i.e: garrison, cavalry,infantry ect. \n\n`
		);
	},
};
