const { boiler } = require("../../utils/embed");
// const { names } = require("./embeds/heroEmbed");
const { getCommander } = require("./rok_modal");

module.exports = {
  name: "Commanders",
  description:
    "Gives optimal ways to play a specific commander. Talent trees, and " +
    "best pairings. You have to give the first name of the commander",
  triggers: ["tree"],
  handler: async (message) => {
    const champion = message.content.toLowerCase().split(" ");
    const commander = await getCommander(
      `${champion[1]}${champion[2] ? " " + champion[2] : ""}`.toUpperCase()
    );
    console.log("commander", commander);
    return message.channel.send({
      embed: { ...boiler },
    });
  },
};
