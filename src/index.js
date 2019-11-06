
//setting environment variables 
require('dotenv').config();

//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

const file = require('./commanderfile.js')

//prefix = !
const { prefix } = require('./config.json')
const errMessage = `Sorry maybe you spell the commander name wrong. Or we havent updated that command yet! If you need help @silent hero or @vert for assistance`
const help =  `To use me please use the exclamation the name of the commander. To make it easier you could also say the first 4 letters instead`

//env vars 
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV

//commander embet info/data
const commander = require('./commanderEmbedInfo')

//testing will display in code land and production will display ready for action
client.on('ready', () => {
    console.log(` \n Logged in as ${client.user.tag} \n`);
    if(ver === 'production') {
        console.log('in production')
        client.user.setActivity(`Ready for Action`)
    }else{
        console.log('in development')
        client.user.setActivity('Under Development')
    }
})
//commands for bot sends name of message and image
client.on('message', message => {
    // case sensitive words
    const msg = message.content.toLowerCase()
    if(message.author.bot) return; // checks if message was sent by a bot
    if(!message.content.startsWith(prefix)) return; //makes so that user needs prefix

    if ( msg.startsWith(prefix+'aethe' || msg.startsWith(prefix+'athe'))) message.channel.send({ files: [file.aethFile], embed: commander.aetheflead })  
    else if ( msg.startsWith(prefix+'scipio')) {
        message.channel.send({ files: [file.scipioFile], embed: commander.Scipio })
    }
    else if ( msg.startsWith(prefix+'han')) {
        message.channel.send({ files: [file.haniFile], embed: commander.hanibal })
    }
    else if ( msg.startsWith(prefix+'sala')) {
        message.channel.send({ files: [file.salaFile], embed: commander.saladin })
    }
    else if ( msg.startsWith(prefix+'con')) {
        message.channel.send({ files: [file.constineFile], embed: commander.constine })
    }
    else if ( msg.startsWith(prefix+'loh')) {
        message.channel.send({ files: [file.loharFile], embed: commander.lohar })
    }
    else if ( msg.startsWith(prefix+'boudi')) {
        message.channel.send({ files: [file.boudicaFile], embed: commander.boudica })
    }
    else if ( msg.startsWith(prefix+'osma')) {
        message.channel.send({ files: [file.osmanFile], embed: commander.osman })
    }
    else if ( msg.startsWith(prefix+'city')) {
        message.channel.send({ files: [file.cityFile], embed: commander.city })
    }
    else if ( msg.startsWith(prefix+'dragon')) {
        message.channel.send({ files: [file.dragonFile], embed: commander.dragon})
    }
    else if ( msg.startsWith(prefix+'tomoe')) {
        message.channel.send({ files: [file.tomoeFile], embed:commander.tomoe })
    }
    else if ( msg.startsWith(prefix+'gengis')) {
        message.channel.send({ files: [file.gengisFile], embed:commander.gengis })
    }
    else if ( msg.startsWith(prefix+'cleo') && msg.endsWith('gather')) {
        message.channel.send({ files: [file.cleo2File], embed: commander.cleo2})
    }
    else if ( msg.startsWith(prefix+'cleo'))  {
        message.channel.send({ files: [file.cleo1File], embed:commander.cleo })
    }
    else if ( msg.startsWith(prefix+'joan') && msg.endsWith('gather')) {
        message.channel.send({ files: [file.joan2File], embed: commander.joan2})
    }
    else if ( msg.startsWith(prefix+'joan'))  {
        message.channel.send({ files: [file.joan1File], embed:commander.joan1 })
    }
    else if ( msg.startsWith(prefix+'sun')) {
        message.channel.send({ files: [file.sun2File], embed: commander.sun2})
    }
    else if ( msg.startsWith(prefix+'jul') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.jul1File], embed:commander.ceaser1 })
    }
    else if ( msg.startsWith(prefix+'jul'))     {
        message.channel.send({ files: [file.jul2File], embed:commander.ceaser2 })
    }
    else if ( msg.startsWith(prefix+'lance')) {
        message.channel.send({ files: [file.lanceFile], embed:commander.lance1 })
    }
    else if ( msg.startsWith(prefix+'fred') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.fred1File], embed:commander.fred1 })
    }
    else if ( msg.startsWith(prefix+'fred')) {
        message.channel.send({ files: [file.fred2File], embed:commander.fred2 })
    }
    else if ( msg.startsWith(prefix+'el') && msg.endsWith('arch'))  {
        message.channel.send({ files: [file.elcid1File], embed:commander.elcid1 })
    }
    else if ( msg.startsWith(prefix+'el')) {
        message.channel.send({ files: [file.elcid2File], embed:commander.elcid2 })
    }
    else if ( msg.startsWith(prefix+'meh') && msg.endsWith('rally'))  {
        message.channel.send({ files: [file.mehmed1File], embed:commander.mehmed1 })
    }
    else if ( msg.startsWith(prefix+'meh')) {
        message.channel.send({ files: [file.mehmed2File], embed:commander.mehmed2 })
    }
    else if ( msg.startsWith(prefix+'beli') && msg.endsWith('cav'))  {
        message.channel.send({ files: [file.beli2File], embed:commander.beli2 })
    }
    else if ( msg.startsWith(prefix+'beli')) {
        message.channel.send({ files: [file.beli1File], embed:commander.beli1 })
    }
    else if ( (msg.startsWith(prefix+'bei') && msg.endsWith('cav')) || (msg.startsWith(prefix+'bai'&& msg.endsWith('cav'))))  {
        message.channel.send({ files: [file.bei2File], embed:commander.bei2 })
    }
    else if ( (msg.startsWith(prefix+'bei') )|| (msg.startsWith(prefix+'bai'))) {
        message.channel.send({ files: [file.bei1File], embed:commander.bei1 }) 
    }
    else if ( msg.startsWith(prefix+'her') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.herman1File], embed:commander.herman1 })
    }
    else if ( msg.startsWith(prefix+'her') && msg.endsWith('arch'))  {
        message.channel.send({ files: [file.herman3File], embed:commander.herman3 })
    }
    else if ( msg.startsWith(prefix+'her')) {
        message.channel.send({ files: [file.herman2File], embed:commander.herman2 })
    }
    else if ( msg.startsWith(prefix+'eul') && msg.endsWith('infantry'))  {
        message.channel.send({ files: [file.eulji3File], embed:commander.eulji3 })
    }
    else if ( msg.startsWith(prefix+'eul') && msg.endsWith('garri'))  {
        message.channel.send({ files: [file.eulji1File], embed:commander.eulji1 })
    }
    else if ( msg.startsWith(prefix+'eul')) {
        message.channel.send({ files: [file.eulji2File], embed:commander.eulji2 })
    }
    else if ( msg.startsWith(prefix+'char') && msg.endsWith('infantry'))  {
        message.channel.send({ files: [file.char2File], embed:commander.char2 })
    }
    else if ( msg.startsWith(prefix+'char') && msg.endsWith('mix'))  {
        message.channel.send({ files: [file.char3File], embed:commander.char3 })
    }
    else if ( msg.startsWith(prefix+'char')) {
        message.channel.send({ files: [file.char1File], embed:commander.char1 })
    }
    else if ( msg.startsWith(prefix+'cao') && msg.endsWith('mobility'))  {
        message.channel.send({ files: [file.cao2File], embed:commander.cao2  })
    }
    else if ( msg.startsWith(prefix+'cao')) {
        message.channel.send({ files: [file.cao1File], embed:commander.cao1 })
    }
    else if ( msg.startsWith(prefix+'yi') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.yi3File], embed:commander.yi3 })
    }
    else if ( msg.startsWith(prefix+'yi') && msg.endsWith('arch'))  {
        message.channel.send({ files: [file.yi2File], embed:commander.yi2 })
    }
    else if ( msg.startsWith(prefix+'yi')) {
        message.channel.send({ files: [file.yi1File], embed:commander.yi1 })
    }
    else if ( msg.startsWith(prefix+'rich') && msg.endsWith('infantry'))  {
        message.channel.send({ files: [file.rich3File], embed:commander.rich3 })
    }
    else if ( msg.startsWith(prefix+'rich') && msg.endsWith('mix'))  {
        message.channel.send({ files: [file.rich2File], embed:commander.rich2 })
    }
    else if ( msg.startsWith(prefix+'rich')) {
        message.channel.send({ files: [file.rich1File], embed:commander.rich1 })
    }
    else if ( msg.startsWith(prefix+'kusu') && msg.endsWith('garri'))  {
        message.channel.send({ files: [file.kusu3File], embed:commander.kusu3 })
    }
    else if ( msg.startsWith(prefix+'kusu') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.kusu2File], embed:commander.kusu2 })
    }
    else if ( msg.startsWith(prefix+'kusu')) {
        message.channel.send({ files: [file.kusu1File], embed:commander.kusu1 })
    }
    else if ( msg.startsWith(prefix+'pela') && msg.endsWith('nuke'))  {
        message.channel.send({ files: [file.pela3File], embed:commander.pela3 })
    }
    else if ( msg.startsWith(prefix+'pela') && msg.endsWith('garri'))  {
        message.channel.send({ files: [file.pela2File], embed:commander.pela2 })
    }
    else if ( msg.startsWith(prefix+'pela')) {
        message.channel.send({ files: [file.pela1File], embed:commander.pela1 })
    }
    else if ( msg.startsWith(prefix+'mina') && msg.endsWith('cav'))  {
        message.channel.send({ files: [file.mina3File], embed:commander.mina3 })
    }
    else if ( msg.startsWith(prefix+'mina') && msg.endsWith('rally'))  {
        message.channel.send({ files: [file.mina2File], embed:commander.mina2 })
    }
    else if ( msg.startsWith(prefix+'mina')) {
        message.channel.send({ files: [file.mina1File], embed:commander.mina1 })
    }
    else if ( msg.startsWith(prefix+'bot')) {
        message.channel.send(`${help}`)
    }
    else message.channel.send(`${errMessage}`)
})



client.login(BOT_TOKEN)