const sunTzu = require('sun-tzu-quotes')

const fire = require('../config.json')

module.exports = {
    name: 'sun tzu quotes',
    triggers: [`${fire}wise`],
    descrition: 'get a famous quote fom sun tzu',
    handler: (message) => {
        if(message.author.bot) return; // checks if message was sent by a bot
        if(!message.content.startsWith(fire)) return; //makes so that user needs prefix

        return message.channel.send(sunTzu())
    }
}