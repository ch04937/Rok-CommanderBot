const { prefix, qoute, ball } = require('../config.json')

const errMessage = `Sorry maybe you spelled the command wrong. Or we havent updated that command yet! If you need help with the command run '!bot'. If you need further assistance @silent hero or @vert for assistance`
const tutorial =  `To use this bot please use the exclamation name of the commander. To make it easier you could also say the first 4 letters instead of the whole name.\n\n  If you want to hear Sun Tzu's quotes use the command '&wise'.\n\n Another feaure is the magic 8 ball ask your question and say '?ball' the magic 8 ball will answer your burning question \n `
const test = `testing handler`


module.exports = {
    name: 'miscellaneous commands',
    descriptions: 'commands that will the user with bot',
    triggers: [prefix, qoute, ball],
    handler: (message) => {
        const msg = message.content.toLowerCase()
        //optimazing code more readable 
        const msgs = message.channel

        if(message.author.bot) return; // checks if message was sent by a bot
        if(!message.content.startsWith( prefix || qoute || ball)) return; //makes so that user needs prefix

        if ( msg.startsWith(prefix+'bot')) {
            msgs.send(`${tutorial}`)
        }
        else if ( msg.startsWith(prefix+'test')) {
            msgs.send(`${test}`)
        }
        else msgs.send(`${errMessage}`)
    }
}
