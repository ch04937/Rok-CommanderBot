require("dotenv").config();
const { Client } = require("discord.js");
const commands = require("./commands");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const router = require("./router/server");
const port = process.env.PORT || 400;
const client = new Client();
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/rok/", router);

client.on("ready", () => {
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

server.get("/", (req, res) => res.send("index"));
server.listen(port, () => console.log(`\n*** Listening on port ${port}***\n`));
