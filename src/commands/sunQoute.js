const sunTzu = require('sun-tzu-quotes')

module.exports = {
    name: 'Sun Tzu Quotes',
    triggers: ['wise'],
    descrition: 'get a famous quote fom sun tzu',
    handler: (message) => {
        if(message.author.bot) return; // checks if message was sent by a bot
        return message.channel.send(sunTzu())
    }
}