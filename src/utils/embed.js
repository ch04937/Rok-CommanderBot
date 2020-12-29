function boiler(description, bot) {
  return {
    color: 0x3a8bdf,
    author: {
      name: "Click Here to invite this bot to your server",
      icon_url: bot,
      url:
        "https://discordapp.com/api/oauth2/authorize?client_id=639172234321199118&permissions=1544027248&scope=bot",
    },
    description: description,
    timestamp: new Date(),
    footer: {
      text: "Thank you for using ROK bot!",
    },
  };
}

module.exports = {
  boiler,
};
