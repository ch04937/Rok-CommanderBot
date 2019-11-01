
const { Client, MessageAttachment } = require('discord.js')
const client = new Client({ disableEveryone: true });

const {
    BOT_TOKEN,    
} = require('./config.js')


client.on('ready', () => {
    console.log(` \n Logged in as ${client.user.username} \n`);
})

// playing ping pong
client.on('message', msg => {
    if(msg.content === '!ping') {
        msg.reply('Pong!');
    }
});

//image basic image
client.on('message', msg => {
    if (msg.content === "!herman") {
        msg.channel.send('herman', {
            files: [
                "./src/assets/herman1.PNG", 
                "./src/assets/herman2.PNG",
                "./src/assets/herman3.PNG",

            ]
        })
    }
})


client.login(BOT_TOKEN)
