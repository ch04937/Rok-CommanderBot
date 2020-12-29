function embed(
  url,
  description,
  author_name,
  author_icon_url,
  author_url,
  field_name,
  field_content,
  bot
) {
  return {
    color: 0x3a8bdf,
    title: "ROK BOT",
    url: url,
    author: {
      name: author_name,
      icon_url: author_icon_url,
      url: author_url,
    },
    description: description,
    thumbnail: {
      url: bot,
    },
    fields: [
      {
        name: field_name,
        value: field_content,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "Thank you for using ROK bot! For more resources",
      icon_url: bot,
    },
  };
}

module.exports = {
  allCommand: (description, bot) => embed(description, bot),
};
