const choices = ["rock", "paper", "scissors"];

const results = [
	["t", "c", "u"],
	["u", "t", "c"],
	["c", "u", "t"],
];

const resultMap = {
	t: "It is a Tie!",
	u: "You Win!",
	c: "You Lose!",
};

module.exports = {
	name: "Rock, Paper, Scissors",
	triggers: ["game"],
	description: "Play a fun game with the bot of rock paper scissors",
	handler: (message) => {
		// generate random choice for computer
		const computer_choice =
			choices[Math.floor(Math.random() * choices.length)];

		// get the choice of the user
		var msg = message.content.toLowerCase().split(" ");
		const player_choice = msg[msg.length - 1];

		// get the index of user's choice
		let userChoiceIndex = choices.indexOf(player_choice);
		let computerChoiceIndex = choices.indexOf(computer_choice);

		// get resutls
		let userResult = results[computerChoiceIndex][userChoiceIndex];

		const rps = {
			color: 0xf66108,
			title: "Rock, Paper, Scizzors",
			author: {
				name: `Lets Play`,
				icon_url:
					"https://miro.medium.com/max/2000/1*FEcr9_owB5KplrClDpRenA.png",
			},
			description: `${message.author} plays ${player_choice}\n\n while I play, ${computer_choice} \n\nResults ${resultMap[userResult]} \n\nThank you for playing.`,
			thumbnail: {
				url:
					"https://miro.medium.com/max/2000/1*FEcr9_owB5KplrClDpRenA.png",
			},
		};
		return message.channel.send({ embed: rps });
	},
};
