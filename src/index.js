
//setting environment variables 
require('dotenv').config();

//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

//env vars 
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV

//commander commands and combos w/t
// const commanderCommands = require('./commands/commander');
// const sunQoute = require('./commands/sunQoute')
// const ball = require('./commands/eightBall') //magic 8 ball questions
// const upgrade = require('./commands/upgrade') //upgrade for buildings

//all bot commands
const { prefix } = require('./config.json')
const commands = require('./commands')

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

//talent trees build and its pairs
// client.on('message', (message) => {
//     commands.handler(command, message);
// })  
//sun Tzu's qoutes
// client.on('message', (message) => {
//     sunQoute.handler(message)
// })
// client.on('message', (message) => {
//     ball.handler(message)
// })
// client.on('message', (message) => {
//     upgrade.handler(message)
// })
// client.on('message', (message) => {
//     miscellaneous.handler(message)
// })
client.on('message', (message) => {
    if(message.content[0] === prefix){
        const command = message.content.split(' ')[0].substr(1)
        commands.handle(command, message)
    }
})

client.login(BOT_TOKEN)