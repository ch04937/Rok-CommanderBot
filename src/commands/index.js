// const fortune = require('./fortune');
// const eightBall = require('./eightBall');
// // const poll = require('./poll');

const commander = require('./commander')
const eightBall = require('./eightBall')
const sunTzu = require('./sunQoute')

let descriptions = '';
const commands = [
  commander,
  eightBall,
  sunTzu
]
.reduce((all, cmd) => {
  cmd.triggers.forEach(trigger => all[trigger] = cmd.handler);
  descriptions += `**${cmd.name}** - ${cmd.description}
Usage: ${cmd.triggers.map(t => '!' + t).join(' or ')} ${cmd.example || ''}

`;
  return all;
}, {});

const allCommands = (message) => {
  return message.channel.send(descriptions);
};

commands['commands'] = allCommands;
commands['bot'] = allCommands;

module.exports = {
  handle: (command, message) => {
    if (command && commands[command]) {
      commands[command](message);
    }
  }
};
