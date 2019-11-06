const { prefix, sufix } = require('../config.json')
const errMessage = `Sorry maybe you spell the commander name wrong. Or we havent updated that command yet! If you need help @silent hero or @vert for assistance`
const tutorial =  `To use this bot please use the exclamation the name of the commander. To make it easier you could also say the first 4 letters instead`
const test = `testing handler`

const combo = require('./commanderCombo/commanderCombo') //combo embet info/data


module.exports = {
    name: 'commander combos',
    description: 'this if for all the commanders that go well together who should be main and or secondary commander',
    handler: ('message', message => {
        const msg = message.content.toLowerCase()
        if(message.author.bot) return; // checks if message was sent by a bot
        if(!message.content.startsWith(prefix)) return; //makes so that user needs prefix
    
        if ( (msg.startsWith(prefix+'aethe'&& msg.endsWith(sufix)) && msg.endsWith(sufix))) {
            message.channel.send( { embed: combo.aetheflead})  
        }
        else if ( msg.startsWith(prefix+'scipio')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.Scipio })
        }
        else if ( msg.startsWith(prefix+'han')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.hanibal })
        }
        else if ( msg.startsWith(prefix+'sala')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.saladin })
        }
        else if ( msg.startsWith(prefix+'con')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.constine })
        }
        else if ( msg.startsWith(prefix+'loh')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.lohar })
        }
        else if ( msg.startsWith(prefix+'boudi')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.boudica })
        }
        else if ( msg.startsWith(prefix+'osma')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.osman })
        }
        else if ( msg.startsWith(prefix+'city')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.city })
        }
        else if ( msg.startsWith(prefix+'dragon')&& msg.endsWith(sufix)) {
            message.channel.send({ embed: combo.dragon})
        }
        else if ( msg.startsWith(prefix+'tomoe')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.tomoe })
        }
        else if ( msg.startsWith(prefix+'gengis')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.gengis })
        }
        else if ( msg.startsWith(prefix+'cleo')&& msg.endsWith(sufix))  {
            message.channel.send({ embed:combo.cleo })
        }
        else if ( msg.startsWith(prefix+'joan')&& msg.endsWith(sufix))  {
            message.channel.send({ embed:combo.joan1 })
        }
        else if ( msg.startsWith(prefix+'jul'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.ceaser1 })
        }
        else if ( msg.startsWith(prefix+'lance')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.lance1 })
        }
        else if ( msg.startsWith(prefix+'fred'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.fred1 })
        }
        else if ( msg.startsWith(prefix+'el'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.elcid1 })
        }
        else if ( msg.startsWith(prefix+'meh'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.mehmed1 })
        }
        else if ( msg.startsWith(prefix+'beli')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.beli1 })
        }
        else if ( (msg.startsWith(prefix+'bei'&& msg.endsWith(sufix)) ) || (msg.startsWith(prefix+'bai'))&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.bei1 }) 
        }
        else if ( msg.startsWith(prefix+'her'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.herman1 })
        }
        else if ( msg.startsWith(prefix+'eul'&& msg.endsWith(sufix)))  {
            message.channel.send({ embed:combo.eulji1 })
        }
        else if ( msg.startsWith(prefix+'char')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.char1 })
        }
        else if ( msg.startsWith(prefix+'cao')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.cao1 })
        }
        else if ( msg.startsWith(prefix+'yi')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.yi1 })
        }
        else if ( msg.startsWith(prefix+'rich')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.rich1 })
        }
        else if ( msg.startsWith(prefix+'kusu')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.kusu1 })
        }
        else if ( msg.startsWith(prefix+'pela')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.pela1 })
        }
        else if ( msg.startsWith(prefix+'mina')&& msg.endsWith(sufix)) {
            message.channel.send({ embed:combo.mina1 })
        }

















        else if ( msg.startsWith(prefix+'bot')) {
            message.channel.send(`${tutorial}`)
        }
        else if ( msg.startsWith(prefix+'test')) {
            message.channel.send(`${test}`)
        }
        else message.channel.send(`${errMessage}`)
    })
}