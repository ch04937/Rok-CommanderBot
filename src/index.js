
//setting environment variables 
require('dotenv').config();

//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

//env vars 
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV

//commander commands and combos w/t
const commanderCommands = require('./commands/commander');

//pratice fortune
const sunQoute = require('./commands/sunQoute')
const ball = require('./commands/eightBall') //magic 8 ball questions
const upgrade = require('./commands/upgrade') //upgrade for buildings
const miscellaneous = require('./commands/miscellaneous') //upgrade for buildings


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
client.on('message', (message) => {
    commanderCommands.handler(message);
})  
//sun Tzu's qoutes
client.on('message', (message) => {
    sunQoute.handler(message)
})
client.on('message', (message) => {
    ball.handler(message)
})
client.on('message', (message) => {
    upgrade.handler(message)
})
client.on('message', (message) => {
    miscellaneous.handler(message)
})

client.login(BOT_TOKEN)