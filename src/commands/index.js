const eightBall = require("./miscellaneous/eightBall");
const sunTzu = require("./miscellaneous/sunQoute");
const donate = require("./miscellaneous/donate");
const poll = require("./miscellaneous/poll");
const rps = require("./miscellaneous/rps");
const countdown = require("./miscellaneous/countdown");
const castle = require("./rokAssets/castle");
const upgrade = require("./rokAssets/cityHall");
const commander = require("./rokAssets/commander");
const { allCommand } = require("../utils/embed");
const embed = require("./miscellaneous/embed");

// new RichEmbed()
//   .setColor("#1ba8f0")
//   .setTitle("ROK BOT")
//   .setDescription(descriptions)
//   .setThumbnail(message.client.user.avatarURL)
//   .setTimestamp()
//   .setFooter(
//     "Thank you for using ROK bot! For more resources",
//
//   )
//   .setURL("https://arc-planner-avuww7k5o.vercel.app/");
let description = "";

const cmd = [
  commander,
  eightBall,
  sunTzu,
  upgrade,
  poll,
  donate,
  castle,
  rps,
  countdown,
].reduce((all, i) => {
  i.triggers.forEach((trigger) => (all[trigger] = i.handler));
  description += `**${i.name}** - ${i.description}\nUsage: ${i.triggers}\n\n`;
  return all;
}, {});

const commands = {
  ...cmd,
  bot: (message) =>
    message.channel.send({
      embed: allCommand(description, message.client.user.avatarURL),
    }),
};
console.log("commands", commands);
module.exports = {
  handler: (command, message) => {
    if (message.author.bot) return;
    if (command && commands[command]) commands[command](message);
  },
};
