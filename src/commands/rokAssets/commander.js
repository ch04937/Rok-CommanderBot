const { boiler } = require("../../utils/embed");
const { names } = require("./embeds/heroEmbed");

module.exports = {
  name: "Commanders",
  description:
    "Gives optimal ways to play a specific commander. Talent trees, and " +
    "best pairings. You have to give the first name of the commander",
  triggers: ["tree"],
  handler: (message) => {
    const champion = message.content.toLowerCase().split(" ");
    return message.channel.send({
      embed: { ...boiler, ...names[`${champion[1]}${champion[2] || ""}`] },
    });
  },
};
