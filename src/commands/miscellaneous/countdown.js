const { Timer } = require("easytimer.js");
const embeds = require("./embed.js");

let getArgs = (msg, cmd) => {
  let command = msg.content;
  let args = command.slice(command.indexOf(cmd) + cmd.length);
  return args;
};

module.exports = {
  name: "Count Down",
  description:
    "A count down an important message. The d = day(s) h = hour(s) m = minute(s), \nUsage: !cd [title_of_envent_no_spaces] [number]d [number]h [number]m \nand",
  triggers: ["countdown", "cd"],
  handler: (message) => {
    if (message.content.startsWith("!cd " || "!countdown ")) {
      let commandRecd = "cd ";
      let args = getArgs(message, commandRecd).split(" ");
      var title = args.shift();

      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      for (let i = 0; i < args.length; i++) {
        let regx = /(\d*)d|(\d*)h|(\d*)m|(\d*)s/g; // THIS IS LITERALLY BLACK MAGIC DO NOT TOUCH
        const arg = args[i];

        let times = arg.match(regx);
        times &&
          times.forEach((x) => {
            let end = x.charAt(x.length - 1);
            if (end === "d") {
              hours = x.slice(0, x.length - 1);
              return;
            }

            if (end === "h") {
              minutes = x.slice(0, x.length - 1);
              return;
            }

            if (end === "m") {
              seconds = x.slice(0, x.length - 1);
              return;
            }
          });
      }
      let timer = new Timer();
      timer.start({
        countdown: true,
        target: [0, 0, 0, 0, 0],
        startValues: {
          seconds: seconds * 60,
          minutes: minutes * 60,
          hours: hours * 24,
        },
        precision: "minutes", // TODO: does not handle small amounts of time well. eg 3h 25mins etc
      });
      let embedmsg;
      message.channel
        .send({ embed: embeds(hours, minutes, seconds, title) })
        .then((m) => (embedmsg = m));

      timer.addEventListener("hoursUpdated", () => {
        embedmsg.edit({ embed: embeds(hours, minutes, seconds, title) });
      });
      timer.addEventListener("daysUpdated", () => {
        embedmsg.edit({ embed: embeds(hours, minutes, seconds, title) });
      });
      timer.addEventListener("targetAchieved", () => {
        message.reply(`The reminder titled \`${title}\` has finished!`);
      });
    }
  },
};
