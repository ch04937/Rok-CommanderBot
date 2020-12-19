//setting environment variables
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

//all bot commands
const commands = require("./commands/command");

//testing will display in code land and production will display ready for action
client.on("ready", () => {
  console.log(`\nLogged in as ${client.user.tag} \n`);
  if (process.env.NODE_ENV === "production") {
    client.user.setStatus("online");
    client.user.setPresence({
      game: {
        name: "In " + client.guilds.size + " Servers",
        type: "PLAYING",
      },
    });
  } else {
    console.log("in development");
    client.user.setStatus("online");
    client.user.setPresence({
      game: {
        name: "Dev In " + client.guilds.size + " Servers",
        type: "PLAYING",
      },
    });
  }
});

client.on("message", (message) => {
  if (message.content[0] === "!") {
    const command = message.content.split(" ")[0].substr(1);
    commands.handler(command, message);
  }
});

client.login(process.env.BOT_TOKEN);
