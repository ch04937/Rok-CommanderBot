require("dotenv").config();
const { Client } = require("discord.js");
const commands = require("./commands");

const client = new Client();

client.on("ready", () => {
  console.log(`\nLogged in as ${client.user.tag} \n`);
  if (process.env.NODE_ENV === "production") {
    client.user.setStatus("online");
    client.user.setPresence({
      game: {
        name: `Run "!bot"  for commands`,
        type: "PLAYING",
      },
    });
  } else {
    console.log("in development");
    client.user.setStatus("online");
    client.user.setPresence({
      game: {
        name: `Run "!bot" for commands`,
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
