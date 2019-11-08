
//getting prefix
const { upgrade } = require('../config.json') 
// getting embeds
const building = require('./upgradeBuildings/upgradeBuildingsEmbed')


module.exports = {
    name: 'building upgrades',
    descrition: 'getting the upgrade information for cicty halls',
    handler: (message) => {
        // case sensitive words
        const msg = message.content.toLowerCase()
        //optimazing code more readable 
        const msgs = message.channel

        if(message.author.bot) return; // checks if message was sent by a bot
        if(!message.content.startsWith( upgrade )) return; //makes so that user needs prefix
        if ( msg.startsWith(upgrade+'city 1')) {
            msgs.send({ files: [file.haniFile], embed: commander.hanibal })
        }
        return message.channel.send()
    }
}