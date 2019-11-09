
//getting prefix
const prefix = '!city '
// getting embeds
const building = require('./upgradeBuildings/upgradeBuildingsEmbed')


module.exports = {
    name: 'building upgrades',
    descrition: 'getting the upgrade information for cicty halls',
    triggers: ['city'],    
    handler: ('message', message => {
        // case sensitive words
        const msg = message.content.toLowerCase()
        //optimazing code more readable 
        const msgs = message.channel

        if(message.author.bot) return; // checks if message was sent by a bot
        if(!message.content.startsWith(prefix)) return; //makes so that user needs prefix
        if ( msg === prefix+'1') {
            msgs.send({ embed: building.city1 })
        }
        if ( msg === prefix+'2') {
            msgs.send({ embed: building.city2 })
        }
        if ( msg === prefix+'3') {
            msgs.send({ embed: building.city3 })
        }
        if ( msg === prefix+'4') {
            msgs.send({ embed: building.city4 })
        }
        if ( msg === prefix+'5') {
            msgs.send({ embed: building.city5 })
        }
        if ( msg === prefix+'6') {
            msgs.send({ embed: building.city6 })
        }
        if ( msg === prefix+'7') {
            msgs.send({ embed: building.city7 })
        }
        if ( msg === prefix+'8') {
            msgs.send({ embed: building.city8 })
        }
        if ( msg === prefix+'9') {
            msgs.send({ embed: building.city9 })
        }
        if ( msg === prefix+'10') {
            msgs.send({ embed: building.city10 })
        }
        if ( msg === prefix+'11') {
            msgs.send({ embed: building.city11 })
        }
        if ( msg === prefix+'12') {
            msgs.send({ embed: building.city12 })
        }
        if ( msg === prefix+'13') {
            msgs.send({ embed: building.city13 })
        }
        if ( msg === prefix+'14') {
            msgs.send({ embed: building.city14 })
        }
        if ( msg === prefix+'15') {
            msgs.send({ embed: building.city15 })
        }
        if ( msg === prefix+'16') {
            msgs.send({ embed: building.city16 })
        }
        if ( msg === prefix+'17') {
            msgs.send({ embed: building.city17 })
        }
        if ( msg === prefix+'18') {
            msgs.send({ embed: building.city18 })
        }
        if ( msg === prefix+'19') {
            msgs.send({ embed: building.city19 })
        }
        if ( msg === prefix+'20') {
            msgs.send({ embed: building.city20 })
        }
        if ( msg === prefix+'21') {
            msgs.send({ embed: building.city21 })
        }
        if ( msg === prefix+'22') {
            msgs.send({ embed: building.city22 })
        }
        if ( msg === prefix+'23') {
            msgs.send({ embed: building.city23 })
        }
        if ( msg === prefix+'24') {
            msgs.send({ embed: building.city24 })
        }
        if ( msg === prefix+'25') {
            msgs.send({ embed: building.city25 })
        }
    })
}