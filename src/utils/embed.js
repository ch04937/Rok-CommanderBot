const boiler = {
  color: 0x3a8bdf,
  author: {
    name: "Click Here to invite this bot to a server",
    url:
      "https://discordapp.com/api/oauth2/authorize?client_id=639172234321199118&permissions=1544027248&scope=bot",
  },
  timestamp: new Date(),
  footer: {
    text: `This is a fanmade bot and it is not affiliated with Lilithgames in any way. Copyright © ${new Date().getFullYear()}.`,
  },
};

const formatEmbed = (embed) => {
  return {
    ...boiler,
    title: embed.name.toUpperCase(),
    description: embed.description,
    thumbnail: {
      url: embed.thumbnail,
    },
    image: {
      url: embed.build_url,
    },
    fields: [
      {
        name: "Other Commander Builds Include:",
        value: `!tree ${embed.name.toLowerCase()} ${embed.other_builds}`,
      },
    ],
  };
};
const errorEmbed = () => {
  return {
    ...boiler,
    description: "The command as you have typed does not exist in our database",
    image: {
      url:
        "https://www.filmla.com/wp-content/uploads/2016/04/travolta-404-comp.gif",
    },
  };
};
module.exports = {
  boiler,
  formatEmbed,
  errorEmbed,
};
