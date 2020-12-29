const castle = require("./embeds/castleEmbed");

module.exports = {
  name: "Castle Upgrades",
  description: "Learn information about castle upgrades",
  triggers: ["castle"],
  handler: (msg) => {
    // loop through object to find key s
    for (let i = 0; i < Object.keys(castle.levels).length; i++) {
      // search for the key
      if (msg.content === `!castle ${i + 1}`) {
        //  send the values as embed
        return msg.channel.send({
          embed: castle.levels[i + 1],
        });
      }
    }
  },
};
