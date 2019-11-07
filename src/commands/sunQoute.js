const sunTzu = require('sun-tzu-quotes')

const fire = require('../config.json')

module.exports = {
    name: 'sun tzu quotes',
    triggers: [`${fire}wise`],
    descrition: 'get a famous quote fom sun tzu',
    handler: (message) => {
        return message.channel.send(sunTzu())
    }
}