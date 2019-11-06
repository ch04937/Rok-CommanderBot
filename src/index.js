
//setting environment variables 
require('dotenv').config();

//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

//env vars 
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV

//commander commands
const commanderCommands = require('./commands/commander')
//commander combos
const commanderCombos = require('./commands/commanderCombos')

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

//talent trees build 
client.on('message', (message) => {
    commanderCommands.handler(message);
})
//who it pairs well with 
client.on('message', (message) => {
    commanderCombos.handler(message);
})

client.login(BOT_TOKEN)