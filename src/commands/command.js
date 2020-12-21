const { RichEmbed } = require("discord.js");
// features
const eightBall = require("./miscellaneous/eightBall");
const sunTzu = require("./miscellaneous/sunQoute");
const donate = require("./miscellaneous/donate");
const poll = require("./miscellaneous/poll");
const rps = require("./miscellaneous/rps");
const countdown = require("./miscellaneous/countdown");
const castle = require("./rokAssets/castle");
const upgrade = require("./rokAssets/cityHall");
const commander = require("./rokAssets/commander");

// help command
let descriptions = "";

const commands = [
  commander,
  eightBall,
  sunTzu,
  upgrade,
  poll,
  donate,
  castle,
  rps,
  countdown,
].reduce((all, cmd) => {
  cmd.triggers.forEach((trigger) => (all[trigger] = cmd.handler));
  descriptions += `**${cmd.name}** - ${cmd.description}\nUsage: ${cmd.triggers}\n\n`;
  return all;
}, {});

commands["bot"] = (message) => {
  return message.channel.send(
    new RichEmbed()
      .setColor("#1ba8f0")
      .setTitle("Bot Commands")
      .setDescription(descriptions)
      .setTimestamp()
      .setFooter(
        `Thank you for using ROK bot! For more resources come [here.] (https://arc-planner-avuww7k5o.vercel.app/) `
      )
  );
};

module.exports = {
  handler: (command, message) => {
    // checks if message was sent by a bot
    if (message.author.bot) return;
    if (command && commands[command]) {
      commands[command](message);
    }
  },
};
