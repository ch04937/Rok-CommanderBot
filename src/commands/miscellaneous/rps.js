const choices = ["rock", "paper", "scissors"];

const results = [
	["t", "c", "u"],
	["u", "t", "c"],
	["c", "u", "t"],
];

const resultMap = {
	t: "Tie",
	u: "You Win",
	c: "You Lose",
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
		console.log(
			`user plays ${player_choice} and the computer plays, ${computer_choice} which means ${resultMap[userResult]}`
		);
	},
};
