const towers = require("./castle");

function buildTheTower(castle) {
	const level = {};
	var i;
	for (i in castle) {
		level[i] = castle[i];
	}
	return level;
}
const levels = buildTheTower(towers);

module.exports = { levels };
